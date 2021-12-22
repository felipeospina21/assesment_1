import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.scss';

const ProductDetail = props => {
  return (
    <div className='modal'>
      <div className='modal__productDetail'>
        <button onClick={props.handleClose}>X</button>
        <h1>{props.product.title}</h1>
        <p><strong>{`Price: $${props.product.price}`}</strong></p>
        <p>{props.product.description}</p>
        <img src={props.product.image} />
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
  handleClose: PropTypes.func,
};
export default ProductDetail;
