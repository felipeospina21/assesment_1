import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './HomePage.scss';
// import { products } from '../../mock/products';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className='homePage'>
      <h1>Home</h1>
      <div className='homePage__cardsContainer'>
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
