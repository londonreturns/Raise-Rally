import React from "react";
import { Link } from "react-router-dom";
// importing icons from reacticons
import { FaFacebook, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-dark pt-2 row gx-0 "
      style={{ backgroundColor: "#40b3a2" }}
    >
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Raise Rally</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                "Raise Rally: Empowering crowdfunding platform for individuals
                and organizations to fund projects, drive innovation, and create
                positive change. Join us in fueling dreams and supporting
                impactful initiatives today!"
              </p>
            </div>
            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Help
                </a>
              </p>
            </div> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
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
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold">
                <Link to="/aboutus">
                About Us
                </Link>
                </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <Link to="/" className="text-dark"> 
                  Raise Rally
                  </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-between p-4 text-black"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="col">
          <div className="row d-flex text-center">
            <div className="me-5">
              <span>
                <h6 className="text-uppercase fw-medium">
                  Get connected with us on social networks:
                </h6>
              </span>
            </div>
          </div>
          <div className="row text-center">
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-white me-4"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="text-white me-4"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-3 fw-semibold"
        style={{ backgroundColor: "#40b3a2" }}
      >
        © 2020 Copyright: Raise Rally
      </div>
    </footer>
  );
}

export default Footer;
