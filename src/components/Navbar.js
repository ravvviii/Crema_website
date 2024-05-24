import React from 'react';

function Navbar() {
  return (
    <nav className=" bg-white p-4 ">
      <div className="container mx-auto flex justify-between ml-10 pl-11">
        <a href="/" className="text-black font-bold">Crema</a>
        <div className="space-x-8 mr-10 pr-10">
          <a href="#features" className=" text-black">Community</a>
          <a href="#products" className=" text-black">Github</a>
          <a href="#contact" className=" text-black">Docs</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
