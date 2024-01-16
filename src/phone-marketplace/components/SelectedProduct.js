import React from 'react';

const SelectedProduct = ({ selectedProducts }) => {
  return (
    <div className="selected-product">
      <h2>Selected Products</h2>
      <div className="product-grid">
        {selectedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.photo} alt={product.name} />
            <div className="product-details">
              <h3>Price:{product.price}$</h3>
              <p>Brand: {product.brand} </p><p> Color:{product.color} </p>
              <p>Time for Sale: {product.timeForSale}</p>
              <p>{product.name}</p>
              <p className="condition-hidden">{product.condition}</p>
              {/* Add your button and other elements here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProduct;
