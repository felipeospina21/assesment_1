import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import Timer from './Timer';
import ProductDetail from './ProductDetail';

const ProductCard = props => {
  const [allowNav, setAllowNav] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const initCount = props.product.id % 2 === 0 ? 0 : 2;

  function handleClick() {
    setShowDetail(!showDetail);
  }
  return (
    <>
      <div className='productCard'>
        <h1>{props.product.title}</h1>
        <img src={props.product.image} />
        <Timer
          hoursMinSecs={{ hours: 0, minutes: initCount, seconds: 60 }}
          setAllowNav={setAllowNav}
        />
        <button
          onClick={handleClick}
          disabled={!allowNav}
          className={
            allowNav ? 'productCard__btn' : 'productCard__btn-disabled'
          }>
          detail
        </button>
      </div>
      {showDetail ? (
        <ProductDetail product={props.product} handleClose={handleClick} />
      ) : null}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
