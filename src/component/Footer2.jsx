import React from 'react';
// import './Footer.css';
import logo from "../Image/logo.webp"
import "../assets/footer2.css"
import { IoMdSend } from "react-icons/io";

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
          <h2>EyeCare
          </h2>
          </div>
          <div className="footer-links">
            <div className='footer-1'>
            <a  href="#home">Explore</a>
           <span>Shop</span>
           <span>Author</span>
           <span>Flash Deals</span>
           <span>Cuppon</span>
            </div>
            <div className='footer-1'>
            <a href="#about">Customer Service</a>
            <span>FAQ & Helps</span>
            <span>Vendor Refund Policies</span>
            <span>Customer Refund Policies</span>
            </div>

            <div className='footer-1'>
            <a href="#services">Our information</a>
            <span>Manufacturers</span>
            <span>Privacy policies</span>
            <span>Terms & conditions</span>
            <span>Contact Us</span>
            </div>


            <div className='footer-1'>
            <a href="#services">Subcribe Now</a>
            <span className='footer-2'>Subscribe your email for  based on your</span>
            <span>newsletter and featured news</span>
            <span className='footer-4'>
                <input placeholder='wright email' type='text'></input><div className='footer2-3'><IoMdSend /></div>
            </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
