import { useState } from 'react';
import axios from 'axios';

const imageConverter = () => {
  // State to store the converted File object
  const [convertedFile, setConvertedFile] = useState(null);

  // Function to extract the name of the image file from its URL
  const getImgName = (url) => url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));

  // Function to convert image source to a File object
  const srcToFile = async (src, fileName = getImgName(src)) => {
    try {
      // Fetch the image data from the URL
      const response = await axios.get(src, { responseType: 'blob' });	
      // Extract MIME type from response headers
      const mimeType = response.headers['content-type'];
      // Create a File object from the image data
      return new File([response.data], fileName, { type: mimeType });
    } catch (error) {
      console.error("Error converting image source to File:", error);
      throw error;
    }
  }

  // Function to handle image conversion
  const convertImage = async (imageUrl) => {
    try {
      const file = await srcToFile(imageUrl);
      setConvertedFile(file);
    } catch (error) {
      console.error("Error converting image:", error);
    }
  };

  return { convertedFile, convertImage };
}

export default imageConverter;
