import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CommonProps from '../../../utils/CommonProps';
import CommonMethods from '../../../utils/CommonMethods';

const Item = (props) => {
  const { item } = props;
  const price = CommonMethods.parsePrice(item.price);
  return (
    <div className="item">
      <div className="item-picture">
        <Link to={`/items/${item.id}`}>
          <img src={item.picture} alt="product" />
        </Link>
      </div>
      <div className="item-description">
        <p className="item-price">{`$ ${price.amount}`}
          <span className="decimal">{price.cents}</span>
        </p>
        <Link className="item-link" to={`/items/${item.id}`}>
          <p>{item.title}</p>
        </Link>
      </div>
      <div className="item-something">
        <p>{item.condition}</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape(CommonProps.Item).isRequired,
};

module.exports = Item;
