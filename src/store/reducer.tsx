const initialState: AssetsState = {
  assets: [
    {
      cryptoIndex: 0,
      accType: "Sub account",
      amount: 1000,
      amountUSD: 100000,
      realized: 1000,
      realizedPercent: 12,
      unrealized: 1000,
      unrealizedPercent: 13,
      total: 1000,
      totalPercent: 20,
    },
    {
      cryptoIndex: 4,
      accType: "Sub account",
      amount: 1000,
      amountUSD: 100000,
      realized: 1000,
      realizedPercent: 12,
      unrealized: 1000,
      unrealizedPercent: 13,
      total: 1000,
      totalPercent: 20,
    },
    {
      cryptoIndex: 6,
      accType: "Sub account",
      amount: 1000,
      amountUSD: 100000,
      realized: 1000,
      realizedPercent: 12,
      unrealized: 1000,
      unrealizedPercent: 13,
      total: 1000,
      totalPercent: 20,
    },
    {
      cryptoIndex: 2,
      accType: "Sub account",
      amount: 1000,
      amountUSD: 100000,
      realized: 1000,
      realizedPercent: 12,
      unrealized: 1000,
      unrealizedPercent: 13,
      total: 1000,
      totalPercent: 20,
    },
    {
      cryptoIndex: 9,
      accType: "Sub account",
      amount: 1000,
      amountUSD: 100000,
      realized: 1000,
      realizedPercent: 12,
      unrealized: 1000,
      unrealizedPercent: 13,
      total: 1000,
      totalPercent: 20,
    },
  ],
  sumAssets: {
    netWorth: 10002,
    realizedReturns: 8992,
    unrealizedReturns: 2123,
  },
};

const reducer = (state: AssetsState = initialState): AssetsState => {
  return state;
};

export default reducer;
