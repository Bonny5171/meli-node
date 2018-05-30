import React from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
  const { name } = props;
  return (
    <span className="category">{name}</span>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

module.exports = Category;
