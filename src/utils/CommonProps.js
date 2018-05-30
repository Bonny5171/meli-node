import PropTypes from 'prop-types';

const CommonProps = {
  Match: (props, propName, componentName) => {
    const propVal = props[propName];
    const validator = {
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    };
    return (PropTypes.checkPropTypes(validator, propVal, 'props', componentName));
  },
  Item: (props, propName, componentName) => {
    const propVal = props[propName];
    const validator = {
      condition: PropTypes.string,
      description: PropTypes.string,
      free_shipping: PropTypes.bool,
      id: PropTypes.string,
      picture: PropTypes.string,
      price: PropTypes.shape(CommonProps.Price),
      sold_quantity: PropTypes.number,
      title: PropTypes.string,
    };
    return (PropTypes.checkPropTypes(validator, propVal, 'props', componentName));
  },
  Price: (props, propName, componentName) => {
    const propVal = props[propName];
    const validator = {
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.number,
    };
    return (PropTypes.checkPropTypes(validator, propVal, 'props', componentName));
  },
};

module.exports = CommonProps;
