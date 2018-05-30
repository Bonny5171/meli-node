import React from 'react';
import PropTypes from 'prop-types';

import CommonProps from '../../../utils/CommonProps';
import CommonMethods from '../../../utils/CommonMethods';

const ItemDetail = (props) => {
  const { item } = props;
  const price = CommonMethods.parsePrice(item.price);
  const soldCounter = item.sold_quantity || 0;
  return (
    <div className="wrapper-details">
      <div className="item-detail-top">
        <div className="item-detail-picture">
          <img src={item.picture} alt="product" />
        </div>
        <div className="item-detail-right-bar">
          <p className="meta">
            {`${item.condition} - ${soldCounter} vendido${(soldCounter > 1) ? 's' : ''}`}
          </p>
          <p className="title">{item.title}</p>
          <p className="price">
            {`$ ${price.amount}`}
            <span className="decimal">{price.cents}</span>
          </p>
          <button className="button-buy">Comprar</button>
        </div>
      </div>
      <div className="item-detail-description">
        <h3>Descripción del producto</h3>
        {item.description}
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape(CommonProps.Item).isRequired,
};

export default ItemDetail;
