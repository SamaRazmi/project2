// Import necessary dependencies and styles
import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is installed in your project
import './ProductStyles.css';

// Functional component ProductForm
const ProductForm = ({ addProduct }) => {
  // State to manage the form data
  const [product, setProduct] = useState({
    name: '',
    photo: '',
    brand: '',
    color: '',
    condition: '',
    price: '',
    timeForSale: new Date().toISOString(),
  });

  // Event handler for input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Event handler for photo changes
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProduct({ ...product, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to mock API to add a new product
      const response = await axios.post(
        'https://6570367409586eff6640ea15.mockapi.io/api/products',
        {
          name: product.name,
          photo: product.photo, // Base64-encoded image
          brand: product.brand,
          color: product.color,
          condition: product.condition,
          price: product.price,
          timeForSale: product.timeForSale,
        },
        {
          timeout: 10000,
          maxContentLength: Infinity,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Call the addProduct function passed as a prop to update the ProductList
      addProduct(response.data);

      // Clear the form fields after successful submission
      setProduct({
        name: '',
        photo: '',
        brand: '',
        color: '',
        condition: '',
        price: '',
        timeForSale: new Date().toISOString(),
      });
    } catch (error) {
      // Log an error if the submission fails
      console.error('Error adding product:', error);
    }
  };

  // Render the form with input fields
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div className="form-column">
        <label>
          Name:
          <input type="text" name="name" placeholder='Please Enter Your Name' value={product.name} onChange={handleChange} />
        </label>
        <label>
          Photo:
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={product.brand} onChange={handleChange} />
        </label>
        <label>
          Time for Sale:
          <p>{new Date(product.timeForSale).toLocaleString()}</p>
        </label>
      </div>
      <div className="form-column">
        <label>
          Color:
          <input type="text" name="color" value={product.color} onChange={handleChange} />
        </label>
        <label>
          Condition:
          <textarea
            name="condition"
            value={product.condition}
            onChange={handleChange}
            rows="4"
            placeholder="Enter product condition..."
            style={{ overflowY: 'auto' }}
          />
        </label>
      </div>
      <div className="form-column">
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
      </div>

      <div className="center">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

// Export the ProductForm component
export default ProductForm;
