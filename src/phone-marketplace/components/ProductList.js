import React, { useEffect, useState } from 'react';
import './ProductStyles.css';

const ProductList = ({ products: initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  // Function to fetch data from the mock API
  const fetchData = async () => {
    try {
      // Fetch data from the mock API
      const response = await fetch('https://6570367409586eff6640ea15.mockapi.io/api/products');

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON data
      const data = await response.json();

      // Update the state with the fetched products
      setProducts(data);
    } catch (error) {
      // Log an error if the fetch fails
      console.error('Error fetching data:', error);
    }
  };

  // Effect to fetch data from the mock API when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {/* Map through the products and render each product */}
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.photo} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Brand: {product.brand}</p>
              {/* Condition is hidden by default */}
              <p className="condition-hidden">Condition: {product.condition}</p>
              <p>Time for Sale: {product.timeForSale}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
