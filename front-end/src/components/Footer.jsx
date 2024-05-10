import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import logo from "../assets/raiserally-logo.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { MdHome } from "react-icons/md";

import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer>
      <section>
        
      <div className=" row p-5  bg-dark text-white d-flex justify-content-center gx-0  "> 
        <div className="col-lg-10">
         <div className="row">
        <div className="col-lg-4 text-start">
          <h6 className=" text-uppercase fw-bold">Raise Rally</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto line" />
          <p>
            Fuel dreams, support innovation, and drive
             positive <br />change with our empowering crowdfunding
             platform. <br/>Join us today to make an impact and 
            bring impactful<br /> projects to life!
          </p>
        </div>
        <div className="col-lg-4 text-lg-center">
          
          <h6 className=" text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto line" />
              <p>
                <MdHome size={23} /> Naxal,Kathmandu
              </p>
              <p>
                <IoMail /> heraldcollege@gmail.com
              </p>
              <p>
                <MdAddCall size={23}/>  01 234 567 88
              </p>
              <p>
                <MdAddCall size={23} />   01 234 567 89
              </p>
            
          </div>
        <div className="col-lg-4 text-lg-end">
         <h6 className=" text-uppercase fw-bold ">Company</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto line" />
          <Link to="/" className="text-decoration-none text-white">
          <p>Homepage</p>
          </Link>
          <Link to="/aboutus" className="text-decoration-none text-white">
          <p>About Us</p>
          </Link>
        </div>


       
        <div>
        </div>

        </div>
        </div>
      </div>
      </section>
      <section>
      <section
        className=" p-4 text-white  bg-dark border-top border-white border-opacity-25"
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
          <div className="row text-center ">
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white me-4 text-white"
              >
                <FaFacebook className="text-white"/>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaInstagram className="text-white"/>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-white me-4"
              >
                <BsLinkedin className="text-white"/>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaGithub className="text-white"/>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center fs-6 fw-semibold pt-4">
        © 2020 Copyright: Raise Rally
      </div>
      </section>

      </section>
    </footer>
  );
}

export default Footer;
