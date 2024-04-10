import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 z-50  shadow-md left-0 right-0 p-5">
      <div className="container m-auto flex  justify-between">
        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/940690/656220_16597.png" className="w-10 rounded-full "/>
      <button type="button " className="text-white bg-blue-600 text-sm px-3 rounded-full font-semibold outline-none border-none py-2" >Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
