import React, { useEffect } from 'react';
import useImageConverter from '../hooks/imageConverter';

function Trial() {
  const { convertedFile, convertImage } = useImageConverter();

  useEffect(() => {
    // URL of the image to convert
    const imageUrl = "http://localhost:8080/api/images/1_3.jpeg";
    // Call the convertImage function when the component mounts
    convertImage(imageUrl);
  }, [convertImage]); // Run this effect only once after initial render

  return (
    <div>
      {convertedFile && (
        <div>
          <p>Converted File:</p>
          {/* Display the converted image */}
          <img src={URL.createObjectURL(convertedFile)} alt="Converted" />
        </div>
      )}
    </div>
  );
}

export default Trial;
