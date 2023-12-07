// Shop.js

import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
    console.log('Updated Products:', products);
  };

  return (
    <div>
      <ProductList products={products} />
      <ProductForm addProduct={addProduct} />
    </div>
  );
};

export default Shop;
