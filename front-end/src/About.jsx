import React from 'react';
import './about.css';
import aboutus from "./assets/Aboutus.png";
import Footer from './components/Footer';
import Header from './components/Header';

function About() {
  return (
    <>
    <Header/>
      <section className="about-section ">
        <div className="container">
          <div className="row">                
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Raise Rally - Working Since 2024</h2>
                </div>
                <div className="text">Crowdfunding has revolutionized the way entrepreneurs, startups, and creative individuals raise funds for their projects and initiatives. At Raise Rally, we believe in the power of crowdfunding to democratize access to capital and support innovative ideas. Through our platform, we empower visionaries from diverse backgrounds to bring their projects to life by connecting them with a global community of backers. Whether it's launching a new product, funding a social cause, or realizing a creative endeavor, crowdfunding offers a collaborative and inclusive approach to fundraising. We are committed to fostering a culture of innovation and entrepreneurship, where every idea has the opportunity to thrive with the support of like-minded individuals. Join us in shaping the future through the power of crowdfunding.</div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Crowd-Funding</h2>
                  <span>Many People's Fund</span>
                </div>
                <figure className="image-1">
                    <img src={aboutus} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;
