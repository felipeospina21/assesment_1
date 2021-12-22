import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCard.scss';
import Timer from './Timer';

const ProductCard = props => {
  const navigate = useNavigate();
  const [allowNav, setAllowNav] = useState(true);
  const initCount = props.product.id % 2 === 0 ? 0 : 2;

  function handleClick() {
    if (allowNav) {
      navigate('/success', { replace: true });
    }
  }
  return (
    <div className='productCard'>
      <h1>{props.product.title}</h1>
      <img src={props.product.image} />
      <Link to={`/detail/${props.product.id}`}>Detail</Link>
      <button onClick={handleClick} disabled={!allowNav}>
        navigate
      </button>
      <Timer
        hoursMinSecs={{ hours: 0, minutes: initCount, seconds: 60 }}
        setAllowNav={setAllowNav}
      />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
