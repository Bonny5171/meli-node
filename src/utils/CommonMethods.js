import querystring from 'query-string';

const CommonFunc = {
  getSearchFromLocation: (location) => {
    const parsedSearch = querystring.parse(location.search);
    return parsedSearch.search;
  },
  parsePrice: (price) => {
    let amount = price.amount || 0;
    let cents = '00';
    if (amount % 1 !== 0) {
      const splitedAmount = amount.toString().split('.');
      amount = splitedAmount[0];
      cents = `${splitedAmount[1]}0`.substr(0, 2);
    }
    amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return { amount, cents };
  },
};

export default CommonFunc;
