import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct'; // Import the SelectedProduct component
import axios from 'axios';
import Spinner from './Spinner';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]); // State to track selected products
  const [loading, setLoading] = useState(true); // Initial loading state set to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://6570367409586eff6640ea15.mockapi.io/api/products'
        );

        if (!response.data) {
          throw new Error('Failed to fetch data');
        }

        setProducts(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function directly
  }, []); // Empty dependency array to run the effect only once on mount

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    console.log('Updated Products:', products);
  };

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
    // Increment the cart count when a product is added to the cart
    setCartCount((prevCount) => prevCount + 1);
    // Handle additional logic for adding to cart if needed

    // Find the selected product
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    // Add the selected product to the state
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      selectedProduct,
    ]);
  };

  const handleShowSelectedProducts = () => {
    // Implement the logic to show the selected products
    console.log('Selected Products:', selectedProducts);
  };

  return (
    <div>
      <div className="cart-button">
        <button onClick={handleShowSelectedProducts}>Cart ({cartCount})</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <ProductList products={products} onAddToCart={handleAddToCart} />
      )}
      <ProductForm addProduct={addProduct} />
      {/* Render the SelectedProduct component with the selected products */}
      <SelectedProduct selectedProducts={selectedProducts} />
    </div>
  );
};

export default Shop;
