import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductStyles.css';

const BidPage = () => {
  // Extracting the productId from the URL parameters
  const { productId } = useParams();

  // State variables to store product and auction data
  const [product, setProduct] = useState(null);
  const [bidPrice, setBidPrice] = useState('');
  const [numBids, setNumBids] = useState(0);

  // useEffect to fetch product and auction data when the component mounts
  useEffect(() => {
    // Function to fetch product data
    const fetchProduct = async () => {
      try {
        // Fetch product data from the mock API
        const response = await fetch(
          `https://6570367409586eff6640ea15.mockapi.io/api/products/${productId}`
        );

        // Handle errors if the request is not successful
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        // Parse the response data and update the product state
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Call the fetchProduct function
    fetchProduct();
  }, [productId]);

  // useEffect to fetch auction data when the component mounts
  useEffect(() => {
    // Function to fetch auction data
    const fetchAuctionData = async () => {
      try {
        // Fetch auction data from the custom API endpoint (modify as needed)
        const response = await fetch(
          `https://6570367409586eff6640ea15.mockapi.io/api/products/${productId}`
        );

        // Handle errors if the request is not successful
        if (!response.ok) {
          throw new Error('Failed to fetch auction data');
        }

        // Parse the response data and update bidPrice and numBids states
        const data = await response.json();
        setBidPrice(data.bidPrice);
        setNumBids(data.numBids);
      } catch (error) {
        console.error('Error fetching auction data:', error);
      }
    };

    // Call the fetchAuctionData function
    fetchAuctionData();
  }, [productId]);

  // Function to handle bid submission
  const handleBidSubmit = async () => {
    try {
      // Parse the current bid price and convert it to a number
      const currentBidPrice = parseFloat(bidPrice);

      // Increase the bid price locally (you can adjust the increment as needed)
      const newLocallyIncreasedBidPrice = currentBidPrice;

      // Update bidPrice state with the new locally increased bid price
      setBidPrice(newLocallyIncreasedBidPrice);

      // Update numBids state with a hypothetical increase in the number of bids
      setNumBids(numBids + 1);

      // Update the mock API with the new bid data
      const updateResponse = await fetch(
        `https://6570367409586eff6640ea15.mockapi.io/api/products/${productId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bidPrice: newLocallyIncreasedBidPrice,
            numBids: numBids + 1,
            // Add other fields if needed
          }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error('Failed to update auction data in the mock API');
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  // JSX to render the BidPage component
  return (
    <div>
      <h2>Bid Page</h2>
      {/* Display product details */}
      {product && (
        <div className="product-container">
          <div className="product-image">
            <img src={product.photo} alt={product.name} />
          </div>
          <div className="product-details">
            <h3>Price: {product.price}$</h3>
            <p>Brand: {product.brand} </p>
            <p>Color: {product.color} </p>
            <p>Time for Sale: {product.timeForSale}</p>
            <p>{product.name}</p>
            <p className="condition-hidden">{product.condition}</p>
            {/* Additional product details */}
          </div>
        </div>
      )}
      {/* Display auction details and bid input form */}
      {product && (
        <div className="auction-container">
          <h3>Auction Details</h3>
          <p>Current Bid: ${bidPrice}</p>
          <p>Number of Bids: ({numBids})</p>
          {/* Bid input form */}
          <div className="bid-input-container">
            <label htmlFor="bidInput">Enter Your Bid:</label>
            <input
              type="number"
              id="bidInput"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
            <button onClick={handleBidSubmit}>Submit Bid</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidPage;
