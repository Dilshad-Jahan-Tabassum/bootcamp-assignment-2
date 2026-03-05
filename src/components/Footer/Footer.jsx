import React from 'react';
import { FaMinus, FaXTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope   } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="h-full bg-black text-white">
            <footer className="footer sm:footer-horizontal p-10">
  <aside>
        <p className="w-full lg:w-64">
            <p className="flex items-center font-bold">CS<span><FaMinus /></span>Ticket System</p>
            <p className="text-gray-400">CS ticket is a platform designed to manage customer support requests smoothly. We help organize customer requests in one place. Easily track, prioritize, and resolve issues for better customer service.</p>
    
        </p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover text-gray-400">About us</a>
    <a className="link link-hover text-gray-400">Our Mission</a>
    <a className="link link-hover text-gray-400">Contact Sales</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover text-gray-400">Products & Services</a>
    <a className="link link-hover text-gray-400">Customer Stories</a>
    <a className="link link-hover text-gray-400">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover text-gray-400">Privacy Policy</a>
    <a className="link link-hover text-gray-400">Terms & Conditions</a>
    <a className="link link-hover text-gray-400">Join Us</a>
  </nav>
  
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover text-gray-400 flex gap-2 justify-center items-center"><FaXTwitter className='bg-white p-1 text-black rounded-full h-5 w-5'/> @CS - Ticket System</a>
    <a className="link link-hover text-gray-400 flex gap-2 justify-center items-center"><FaLinkedinIn  className='bg-white p-1 text-black rounded-full h-5 w-5'/> @CS - Ticket System</a>
    <a className="link link-hover text-gray-400 flex gap-2 justify-center items-center"><FaFacebookF  className='bg-white p-1 text-black rounded-full h-5 w-5'/> @CS - Ticket System</a>
    <a className="link link-hover text-gray-400 flex gap-2 justify-center items-center"><FaEnvelope  className='bg-white p-1 text-black rounded-full h-5 w-5'/> support@cst.com</a>
    
  </nav>
</footer>
<footer>
         <hr className='border border-white text-center mx-10' />
         <p className='font-semibold text-gray-400 text-center mt-5 pb-3'>&copy; 2025 CS — Ticket System. All rights reserved.</p>
</footer>
        </div>
    );
};

export default Footer;