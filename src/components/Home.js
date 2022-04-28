import React, { useState } from "react";
import Review from "./Review";
import { GoKebabVertical } from "react-icons/go";
import { IoRibbonOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const [showItem, setShowItem] = useState(false);

  const handleOpen = () => {
    setShowItem((prev) => !prev);
  };
  return (
    <main>
      <section className="home">
        <div className={`fixed-nav ${showItem ? "open" : ""}`}>
          <div className="close-btn" onClick={handleOpen}>
            X
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>

        <header>
          <div className="logo">luxterior</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contacts">Contacts</a>
          </nav>
          <div className="search-btn-hamburger">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <GoKebabVertical onClick={handleOpen} />
          </div>{" "}
        </header>
        <div className="hero" id="home">
          <div className="hero-text">
            <h1>
              We help you <br /> make modern <br /> furniture.
            </h1>
            <h5>
              We will help you to mock on elegant <br /> and fabulous designs by{" "}
              <br />
              professional interior designers.
            </h5>
          </div>
          <div className="explore">
            <h3>Explore</h3>
          </div>
          <div className="hero-img"></div>
        </div>
        <div className="best-exp">
          <div className="heading">
            {" "}
            <hr />
            <div className="texts">
              {" "}
              <h1>Benefits you get when </h1>
              <h2>you use our services.</h2>
            </div>
          </div>

          <div className="services" id="about">
            <div
              className="quality"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="icon">
                <IoRibbonOutline />
              </div>

              <div className="quality-text">
                <h3>Best Quality</h3>
                <h5>
                  All of our furnitures uses the best <br /> materials and
                  choices for our <br /> customers.
                </h5>
              </div>
            </div>
            <div
              className="shipping"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1700"
            >
              <div className="icon">
                <FaShippingFast />
              </div>
              <div className="shipping-text">
                <h3>Free Shipping</h3>
                <h5>
                  Free shipping anytime you buy <br /> furnitures from us
                  without <br />
                  exception.
                </h5>
              </div>
            </div>
            <div
              className="warranty"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <div className="icon">
                <MdOutlineVerified />
              </div>
              <div className="warranty-text">
                <h3>Warranty</h3>
                <h5>
                  Anytime you buy our product, <br /> you get a warranty without{" "}
                  <br />
                  exception.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="provision">
          <div className="provision-image-container"></div>
          <div className="text-numbers-btn">
            <div className="text">
              <h1>We provide you the best experience</h1>
              <h5>
                You don't worry about the results because all of these interiors
                are <br /> made by people who are professionals in their fields
                with an elegant and <br /> luxurious style, and with premium
                quality materials.
              </h5>
            </div>
            <div className="numbers">
              <div>
                <h1>17</h1>
                <h5>Years experience</h5>
              </div>
              <div>
                <h1>85</h1>
                <h5>Awards gained</h5>
              </div>
              <div>
                <h1>537</h1>
                <h5>furnitures sold</h5>
              </div>
            </div>
            <div className="btn">
              <button>Learn more</button>{" "}
              <HiOutlineArrowNarrowRight className="arrow" />
            </div>
          </div>
        </div>
        <div className="process">
          <div className="process-flow">
            <div className="process-flow-header">
              <h1>We provide the best process experience</h1>
            </div>
            <div className="flow">
              <div className="flow-steps">
                <div>
                  <h4>1</h4>
                </div>
                <hr />
                <div>
                  <h4>2</h4>
                </div>
                <hr />
                <div>
                  <h4>3</h4>
                </div>
              </div>
              <div className="flow-texts">
                <div>
                  <h3>Briefing</h3>
                  <h5>First thing you determine the...</h5>
                </div>
                <div>
                  <h3>Briefing</h3>
                  <h5>First thing you determine the...</h5>
                </div>
                <div>
                  <h3>Briefing</h3>
                  <h5>First thing you determine the...</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="process-image-container"></div>
        </div>
        {/* review component */}
        <Review />

        <div className="subscribe">
          <div className="subscribe-header">
            <h1>
              Subscribe to get the latest <br /> news about us.
            </h1>
            <h6>
              We recommend you to subscribe to our newspaper. Enter your
              <br />
              email to get daily emails about us.
            </h6>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        <footer>
          <div className="luxterior">
            <h3>Luxterior</h3>
            <h6>
              We will help you make an elegant and <br /> luxurious interior
              designed by a <br />
              professional interior designer.
            </h6>
          </div>
          <div>
            <h3>About</h3>
            <h6>About us</h6>
            <h6>Features</h6>
            <h6>News</h6>
            <h6>Careers</h6>
          </div>
          <div>
            <h3>Company</h3>
            <h6>Our team</h6>
            <h6>Partner with us</h6>
            <h6>FAQ</h6>
            <h6>Blog</h6>
          </div>
          <div>
            <h3>Support</h3>
            <h6>Account</h6>
            <h6>Support centre</h6>
            <h6>Feedback</h6>
            <h6>Contact us</h6>
            <h6>Accesibility</h6>
          </div>
          <div>
            <h3>Get in touch</h3>
            <h6>Questions or feedback?</h6>
            <h6>We'd love to hear from you.</h6>
            <h6>Accesibility</h6>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Home;
