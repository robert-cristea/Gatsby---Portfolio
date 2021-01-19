import React from "react";
import Navigator from "../navigator"
import { Link } from 'gatsby'
import images from "../../constants/images"

function Header() {

  return (
    <header className="z-50 w-full">
      {/* pre load images */}
      <img src={images.IMG_BG_HOME} className="hidden" />
      <img src={images.IMG_BG_SERVICES} className="hidden" />
      <div className="absolute top-0 right-0 mr-16 lg:mr-8 z-50 s-area">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={images.IC_INS} className="pr-2 object-none hidden tiny:inline-block" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={images.IC_FB} className="pr-4 lg:pr-8 object-none hidden tiny:inline-block" /></a>
        <Link to="/booking" className="top-booking-button">Book consultation</Link>
      </div>
      <Navigator />
    </header >
  );
}

export default Header;
