
import React, { useState } from 'react';
import postAxios from '../hooks/postAxios';

function Addimage() {
  const { makeRequest, isLoading, error } = postAxios("http://localhost:8080/api/images/1");

  const [selectedImages, setSelectedImages] = useState([null, null, null]);

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Please upload a file smaller than 5 MB");
      return;
    }

    setSelectedImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[index] = file;
      return updatedImages;
    });
  };

  const handleUpload = async () => {
    if (selectedImages.some(image => !image)) {
      alert('Please select all three images');
      return;
    }
  
    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append(`file`, image);
    });
  
    try {
      await makeRequest(formData);
      console.log('Images uploaded successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  

  return (

    <>
    <div className='text-center p-4 fs-5 fw-medium '>
        Choose Product Photos
      </div>
      <div>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={(event) => handleImageChange(event, 0)} />
        {selectedImages[0] && <img src={URL.createObjectURL(selectedImages[0])} alt="Preview" />}
      </div>
      <div>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={(event) => handleImageChange(event, 1)} />
        {selectedImages[1] && <img src={URL.createObjectURL(selectedImages[1])} alt="Preview" />}
      </div>
      <div>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={(event) => handleImageChange(event, 2)} />
        {selectedImages[2] && <img src={URL.createObjectURL(selectedImages[2])} alt="Preview" />}
      </div>
      <button onClick={handleUpload} disabled={isLoading}>Upload Images</button>
      {isLoading && <p>Uploading...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

export default Addimage;
