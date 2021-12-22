import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

const ProductDetailPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
  return (
    <div>
      {products.map(product => {
        return (
          <Link to={`/detail/${product.id}`} key={product.id}>
            {product.title}
          </Link>
        );
      })}
      <Outlet/>
    </div>
  );
};

export default ProductDetailPage;
