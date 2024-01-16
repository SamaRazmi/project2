import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductStyles.css';

const ProductList = ({ products: initialProducts, onAddToCart }) => {
  const [products, setProducts] = useState(initialProducts);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://6570367409586eff6640ea15.mockapi.io/api/products'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [initialProducts]);

  const handleAddToCart = (productId) => {
    // Remove the product from the list when Add to Cart is clicked
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    onAddToCart(productId);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img src={product.photo} alt={product.name} />
            <div className="product-details">
              <h3>Price: {product.price}$</h3>
              <p>Brand: {product.brand} </p>
              <p>Color: {product.color} </p>
              <p>Time for Sale: {product.timeForSale}</p>
              <p>{product.name}</p>
              <p className="condition-hidden">{product.condition}</p>
              {hoveredProduct === product.id && (
                <div className="product-buttons">
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/bid/${product.id}`} className="bid-button">
                    Bid
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
