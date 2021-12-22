import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // const [products, setProducts] = useState([]);
  let params = useParams();
  let product = getProduct(params.id);

  function getProduct(id) {
    params.products.find(product => product.id === id);
  }

  return (
    <>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.id}</p>
      </div>
    </>
  );
};

export default ProductDetail;
