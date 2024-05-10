import React, { useState } from 'react';
import { FaFileUpload } from "react-icons/fa";
import postAxios from '../hooks/postAxios';
function Addimage() {
  
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const onImageChange = (event) => {
        const file = event.target.files[0];

        if (file && file.size > 7 * 1024 * 1024) {
            window.alert("Please upload a file smaller than 7 MB");
            return;
        }

        const imageSrc = URL.createObjectURL(file);

        switch (event.target.id) {
            case "fileInput1":
                setImage1(imageSrc);
                break;
            case "fileInput2":
                setImage2(imageSrc);
                break;
            case "fileInput3":
                setImage3(imageSrc);
                break;
            default:
                break;
        }
    };
  const handleNext=()=>{

  }
    return (
        <> 
            <div className='text-center p-4 fs-5 fw-medium '>
                Choose Product Photos
            </div>
                <div className='d-flex flex-column flex-lg-row  justify-content-center align-items-center  gap-2 p-5 '>
                <div className='pt-5 Addimage text-center '>
                    <div><FaFileUpload size={40} /></div>
                    <div className='d-flex justify-content-center'>
                        <label htmlFor="fileInput1" className='btn btn bg-success text-white m-2'>
                            Choose File
                            <input id="fileInput1" type="file" accept=".jpg" onChange={onImageChange} style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div>
                        {image1 && <img alt="preview image" width="150" height="150" src={image1} />}
                    </div>
                </div>
                <div className='pt-5 Addimage text-center'>
                    <div><FaFileUpload size={40} /></div>
                    <div className='d-flex justify-content-center'>
                        <label htmlFor="fileInput2" className='btn btn bg-success text-white m-2'>
                            Choose File
                            <input id="fileInput2" type="file" accept=".jpg" onChange={onImageChange} style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div>
                        {image2 && <img alt="preview image" width="150" height="150" src={image2} />}
                    </div>
                </div>
                <div className='pt-5 Addimage text-center'>
                    <div><FaFileUpload  size={40} /></div>
                    <div className='d-flex justify-content-center'>
                        <label htmlFor="fileInput3" className='btn btn bg-success text-white m-2'>
                            Choose File
                            <input id="fileInput3" type="file" accept=".jpg" onChange={onImageChange} style={{ display: 'none' }} />
                        </label>
                    </div>
                    <div>
                        {image3 && <img alt="preview image" width="150" height="150" src={image3} />}
                    </div>
                    <div className=' d-inline-block btn btn-primary position-absolute mt-5 ms-5' data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                Continue
            </div>
            <div
          className="modal fade "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-dark-subtle">
                <h1 className="modal-title fs-4" id="exampleModalLabel">
                  Confirm AddProduct
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button onClick={handleNext}
                  type="button"
                  className="btn btn-success"
                 
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

                </div>
                
                
                
             </div>
             
        </>
    );
}

export default Addimage;
