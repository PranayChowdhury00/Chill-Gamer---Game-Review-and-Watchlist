import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-base-200  text-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4 ">&copy; 2024 Chill Gamer. All rights reserved.</p>

        
        <ul className="flex text-black justify-center space-x-6 mb-4 flex-wrap sm:space-x-8">
          <li>
            <a href="#" className="hover:text-green-400">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">Contact</a>
          </li>
        </ul>

       
        <div className="flex justify-center space-x-6 sm:space-x-8">
          <a href="#" className="text-xl hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
