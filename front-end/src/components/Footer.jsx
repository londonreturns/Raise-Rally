import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdHome } from "react-icons/md";     



import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer
      className=" text-lg-start text-dark pt-2 row gx-0 ">

      <section className="bg-dark-subtle">
        <div className="row container-fluid p-5">
          <div className="col-lg-6 ">
          <div>
             <h6 className=" text-uppercase fw-bold">Raise Rally</h6>
             <hr
                className="mb-4 mt-0 d-inline-block mx-auto line"
                
              />
              <div className="row">
                <div className="col-lg-6">
                <p>Raise Rally: Empowering crowdfunding platform for individuals
                and organizations to fund projects, drive innovation, and create
                positive change. Join us in fueling dreams and supporting
                impactful initiatives today!</p>
                </div>
              </div>
               
                </div>
              </div>
             
          <div className="col-lg-3 text-start">
          <div>
             <h6 className=" text-uppercase fw-bold">Contact</h6>
             <hr
                className="mb-4 mt-0 d-inline-block mx-auto line"
                
              />
              <p>
                <MdHome size={23} /> Naxal,Kathmandu
              </p>
              <p>
                <IoMail /> heraldcollege@gmail.com
              </p>
              <p>
                <FaPhone />+ 01 234 567 88
              </p>
              <p>
                <FaPhone /> + 01 234 567 89
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-end">
          <div>
             <h6 className=" text-uppercase fw-bold">Quick Links</h6>
             <hr
                className="mb-4 mt-0 d-inline-block mx-auto line"
                
              />
              <ul>
              <Link to="/">
              
              <li className="fs-6 fw-medium text-dark">Homepage</li>
              </Link>
              <Link to="/aboutus">
              <li className="fs-6 fw-medium text-dark">About us</li>
              </Link>
              </ul>
            </div>
          </div>




            
             </div>
            
            
            
        
      </section>
      <section
        className=" p-4 text-black  bg-dark-subtle border-top border-dark border-opacity-25"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <div className="col">
          <div className="row d-flex text-center">
            <div className="me-5">
              <span>
                <h6 className="text-uppercase fw-medium ">
                  Get connected with us on social networks:
                </h6>
              </span>
            </div>
          </div>
          <div className="row text-center text-black">
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white me-4 text-black"
              >
                <FaFacebook className="text-black"/>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaInstagram className="text-black"/>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-white me-4"
              >
                <BsLinkedin className="text-black"/>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaGithub className="text-black"/>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center fs-6 fw-semibold pt-4">
        © 2020 Copyright: Raise Rally
      </div>
      </section>

    </footer>
  );
}

export default Footer;

