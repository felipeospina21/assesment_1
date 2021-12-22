import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import {products} from '../../mock/products'
const HomePage = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(json => setProducts(json));
  // }, []);

  // const products = products
  return (
    <div>
      <h1>Home Page</h1>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default HomePage;
