import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { BigNumber } from 'meteor/ethereum:web3';
import { web3 } from 'meteor/makerotc:dapple';

import Transactions from '/imports/api/transactions';
import Tokens from '/imports/api/tokens';
import TokenEvents from '/imports/api/tokenEvents';
import { prettyError } from '/imports/utils/prettyError';

import './ethtokens.html';

const TRANSACTION_TYPE_WITHDRAW = 'ethtokens_withdraw';
const TRANSACTION_TYPE_DEPOSIT = 'ethtokens_deposit';
const DEPOSIT_GAS = 150000;
const WITHDRAW_GAS = 150000;
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';

Template.ethtokens.viewmodel({
  type() {
    const depositType = (this !== null && this !== undefined) ? this.depositType() : '';
    return depositType;
  },
  amount: '',
  lastError: '',
  pending() {
    if (this.type() === DEPOSIT) {
      return Transactions.findType(TRANSACTION_TYPE_DEPOSIT);
    }
    return Transactions.findType(TRANSACTION_TYPE_WITHDRAW);
  },
  maxAmount() {
    let maxAmount = '0';
    try {
      if (this.type() === DEPOSIT) {
        maxAmount = web3.fromWei(Session.get('ETHBalance'));
      } else if (this.type() === WITHDRAW) {
        maxAmount = web3.fromWei(Tokens.findOne('ETH').balance);
      }
    } catch (e) {
      maxAmount = '0';
    }
    return maxAmount;
  },
  canDeposit() {
    try {
      const amount = new BigNumber(this.amount());
      const maxAmount = new BigNumber(this.maxAmount());
      return amount.gt(0) && amount.lte(maxAmount);
    } catch (e) {
      return false;
    }
  },
  deposit(event) {
    event.preventDefault();
    this.lastError('');

    if (this.type() === DEPOSIT) {
      const options = {
        gas: DEPOSIT_GAS,
        value: web3.toWei(this.amount()),
      };
      // XXX EIP20
      Dapple.getToken('ETH', (error, token) => {
        if (!error) {
          token.deposit(options, (txError, tx) => {
            if (!txError) {
              console.log('add transaction deposit');
              Transactions.add(TRANSACTION_TYPE_DEPOSIT, tx, { type: DEPOSIT, amount: this.amount() });
            } else {
              this.lastError(prettyError(txError));
            }
          });
        } else {
          this.lastError(error.toString());
        }
      });
    } else {
      // XXX EIP20
      Dapple.getToken('ETH', (error, token) => {
        if (!error) {
          token.withdraw(web3.toWei(this.amount()), { gas: WITHDRAW_GAS }, (txError, tx) => {
            if (!txError) {
              console.log('add transaction withdraw');
              Transactions.add(TRANSACTION_TYPE_WITHDRAW, tx, { type: WITHDRAW, amount: this.amount() });
            } else {
              this.lastError(prettyError(txError));
            }
          });
        } else {
          this.lastError(error.toString());
        }
      });
    }
  },
});
