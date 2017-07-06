const SimpleMarketABI = {
  interface: [{
    constant: false,
    inputs: [{ name: 'haveToken', type: 'address' }, { name: 'wantToken', type: 'address' }, {
      name: 'haveAmount',
      type: 'uint128',
    }, { name: 'wantAmount', type: 'uint128' }],
    name: 'make',
    outputs: [{ name: 'id', type: 'bytes32' }],
    payable: false,
    type: 'function',
  }, {
    constant: true,
    inputs: [],
    name: 'last_offer_id',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'cancel',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'getOffer',
    outputs: [{ name: '', type: 'uint256' }, { name: '', type: 'address' }, { name: '', type: 'uint256' }, {
      name: '',
      type: 'address',
    }],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'bytes32' }, { name: 'maxTakeAmount', type: 'uint128' }],
    name: 'take',
    outputs: [],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id_', type: 'bytes32' }],
    name: 'bump',
    outputs: [],
    payable: false,
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'isActive',
    outputs: [{ name: 'active', type: 'bool' }],
    payable: false,
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'offers',
    outputs: [{ name: 'sell_how_much', type: 'uint256' }, {
      name: 'sell_which_token',
      type: 'address',
    }, { name: 'buy_how_much', type: 'uint256' }, { name: 'buy_which_token', type: 'address' }, {
      name: 'owner',
      type: 'address',
    }, { name: 'active', type: 'bool' }, { name: 'timestamp', type: 'uint64' }],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'bytes32' }],
    name: 'kill',
    outputs: [],
    payable: false,
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'getOwner',
    outputs: [{ name: 'owner', type: 'address' }],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'uint256' }, { name: 'quantity', type: 'uint256' }],
    name: 'buy',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'sell_how_much', type: 'uint256' }, {
      name: 'sell_which_token',
      type: 'address',
    }, { name: 'buy_how_much', type: 'uint256' }, { name: 'buy_which_token', type: 'address' }],
    name: 'offer',
    outputs: [{ name: 'id', type: 'uint256' }],
    payable: false,
    type: 'function',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'uint256' }],
    name: 'ItemUpdate',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'sell_how_much', type: 'uint256' }, {
      indexed: true,
      name: 'sell_which_token',
      type: 'address',
    }, { indexed: false, name: 'buy_how_much', type: 'uint256' }, {
      indexed: true,
      name: 'buy_which_token',
      type: 'address',
    }],
    name: 'Trade',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'haveToken',
      type: 'address',
    }, { indexed: false, name: 'wantToken', type: 'address' }, {
      indexed: false,
      name: 'haveAmount',
      type: 'uint128',
    }, { indexed: false, name: 'wantAmount', type: 'uint128' }, { indexed: false, name: 'timestamp', type: 'uint64' }],
    name: 'LogMake',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'haveToken',
      type: 'address',
    }, { indexed: false, name: 'wantToken', type: 'address' }, {
      indexed: false,
      name: 'haveAmount',
      type: 'uint128',
    }, { indexed: false, name: 'wantAmount', type: 'uint128' }, { indexed: false, name: 'timestamp', type: 'uint64' }],
    name: 'LogBump',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'haveToken',
      type: 'address',
    }, { indexed: false, name: 'wantToken', type: 'address' }, {
      indexed: true,
      name: 'taker',
      type: 'address',
    }, { indexed: false, name: 'takeAmount', type: 'uint128' }, {
      indexed: false,
      name: 'giveAmount',
      type: 'uint128',
    }, { indexed: false, name: 'timestamp', type: 'uint64' }],
    name: 'LogTake',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'haveToken',
      type: 'address',
    }, { indexed: false, name: 'wantToken', type: 'address' }, {
      indexed: false,
      name: 'haveAmount',
      type: 'uint128',
    }, { indexed: false, name: 'wantAmount', type: 'uint128' }, { indexed: false, name: 'timestamp', type: 'uint64' }],
    name: 'LogKill',
    type: 'event',
  }],
};

export { SimpleMarketABI as default };
