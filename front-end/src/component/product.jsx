import React, { useState } from 'react';

function ProductForm() {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const goToStep = (step) => {
    if (step === 2 && category === '') {
      alert('Please fill in the Category before proceeding.');
    } else if (step === 3 && productDescription === '') {
      alert('Please fill in the Product Description before proceeding.');
    } else {
      setCurrentStep(step);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div>
        <ul>
          <li className={currentStep >= 1 ? 'completed' : ''} onClick={() => goToStep(1)}>Category</li>
          <li className={currentStep >= 2 ? 'completed' : ''} onClick={() => goToStep(2)}>Product Description</li>
          <li className={currentStep >= 3 ? 'completed' : ''} onClick={() => goToStep(3)}>Pricing & Images</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <label htmlFor="category">Category:</label><br />
            <input
              type="text"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              required
            /><br /><br />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <label htmlFor="product_name">Product Name:</label><br />
            <input
              type="text"
              id="product_name"
              value={productName}
              onChange={handleProductNameChange}
              required
            /><br /><br />
            <label htmlFor="product_description">Product Description:</label><br />
            <textarea
              id="product_description"
              value={productDescription}
              onChange={handleProductDescriptionChange}
              rows="4"
              cols="50"
              required
            ></textarea><br /><br />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <label htmlFor="product_price">Price:</label><br />
            <input
              type="number"
              id="product_price"
              value={productPrice}
              onChange={handleProductPriceChange}
              step="0.01"
              required
            /><br /><br />
            <label htmlFor="product_image">Product Image:</label><br />
            <input
              type="file"
              id="product_image"
              onChange={handleProductImageChange}
              accept="image/*"
              required
            /><br /><br />
          </div>
        )}
        <div>
          {currentStep > 1 && <button type="button" onClick={() => goToStep(currentStep - 1)}>Previous</button>}
          {currentStep < 3 && <button type="button" onClick={() => goToStep(currentStep + 1)}>Next</button>}
          {currentStep === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
