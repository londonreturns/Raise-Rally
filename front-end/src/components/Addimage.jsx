import React, { useState } from 'react';
import postAxios from '../hooks/postAxios';
import { FaFileUpload } from "react-icons/fa";
import Productadd from './Productadd';
import { useNavigate } from 'react-router-dom';
function Addimage() {
  const nav=useNavigate();
  const ProductId=localStorage.getItem('productId');
  const { makeRequest, isLoading, error } = postAxios(`http://localhost:8080/api/images/${ProductId}`);

  const [selectedImages, setSelectedImages] = useState([null, null, null]);

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    
    if (!file) return;

    if (file.size > 7 * 1024 * 1024) {
      alert("Please upload a file smaller than 7 MB");
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
      nav('/company/dashboard')
      
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  

  return (

    <>
    <div>
    <div className='text-center p-4 fs-5 fw-medium '>
      Choose Product Photos
    </div>
    <div className='d-flex flex-column flex-lg-row  justify-content-center align-items-center  gap-2 p-5 '>
    <div className='pt-5 Addimage text-center '>
      <div><FaFileUpload size={40} /></div>
      <div className='d-flex justify-content-center'>
        <label  className='btn btn bg-success text-white m-2'>
          Choose File
          <input id="file" type="file" accept=".jpg"onChange={(event) => handleImageChange(event, 0)} style={{ display: 'none' }} />
        </label>
      </div>
      <div>
        {selectedImages[0] && <img src={URL.createObjectURL(selectedImages[0])} width="150" height="150" alt="Preview" />}
      </div>
    </div>
    <div className='pt-5 Addimage text-center '>
      <div><FaFileUpload size={40} /></div>
      <div className='d-flex justify-content-center'>
        <label className='btn btn bg-success text-white m-2'>
          Choose File
          <input id="file" type="file" accept=".jpg"onChange={(event) => handleImageChange(event, 1)} style={{ display: 'none' }} />
        </label>
      </div>
      <div>
        {selectedImages[1] && <img src={URL.createObjectURL(selectedImages[1])} width="150" height="150" alt="Preview" />}
      </div>
    </div>
    <div className='pt-5 Addimage text-center '>
      <div><FaFileUpload size={40} /></div>
      <div className='d-flex justify-content-center'>
        <label  className='btn btn bg-success text-white m-2'>
          Choose File
          <input id="file" type="file" accept=".jpg"onChange={(event) => handleImageChange(event, 2)} style={{ display: 'none' }} />
        </label>
      </div>
      <div>
        {selectedImages[2] && <img src={URL.createObjectURL(selectedImages[2])} width="150" height="150" alt="Preview" />}
      </div>
      <div className=' d-inline-block btn btn-primary position-absolute mt-5 ms-5' onClick={handleUpload}>
                AddImage
            </div>


                </div>
                
                
                </div>
             </div>
</>
  );
}

export default Addimage;
