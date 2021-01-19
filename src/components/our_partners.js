import React from 'react'
import images from "../constants/images"

function OurPartners() {
    return (
        <div className="bg-grey px-10 md:px-32 py-6 mt-10 grid grid-cols-2 md:grid-cols-6 col-gap-2 row-gap-2">
            <span className="heading2 my-auto w-full md:w-auto">Our Partners</span>
            <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={images.IMG_PARTNER1} className="object-none" /></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={images.IMG_PARTNER2} className="object-none" /></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={images.IMG_PARTNER3} className="object-none" /></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={images.IMG_PARTNER4} className="object-none" /></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={images.IMG_PARTNER5} className="object-none" /></a>
        </div>
    );
}

export default OurPartners;