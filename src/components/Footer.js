import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <img src="/logo.png" alt="VCS Soft Technologies Pvt. Ltd." className="mx-auto md:mx-0 mb-4"/>
          <p>© 2024 VCS Soft Technologies Pvt. Ltd.</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Our Products</h4>
          <ul>
            <li>Crema</li>
            <li>Crema Ant</li>
            <li>Hipster</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Important Links</h4>
          <ul>
            <li>Features</li>
            <li>Support</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Our Offices</h4>
          <p>Shop 17, Sangam market Jhunjhunu (Raj), India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
