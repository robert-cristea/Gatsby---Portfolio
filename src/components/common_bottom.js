import React from 'react'
import Carousel from "./carousel"
import { Link } from "gatsby"
import images from "../constants/images"

function CommonBottom() {

    return (
        <div>
            <div className="grid grid-cols-3 col-gap-2 pr-1">
                <img src={images.IMG_EYE1} />
                <img src={images.IMG_EYE2} />
                <img src={images.IMG_EYE3} />
            </div>

            <div className="w-full px-3 md:px-24 lg:px-32 py-6">
                <Carousel />
            </div>

            <div className="bg-primary py-6 text-center">
                <p className="heading2 pb-4">Ready to find out more?</p>
                <p className="heading pb-4">Get in touch today to see how we can help you</p>
                <div className="mx-auto flex justify-center">
                    <Link className="button-second mr-1" to="/booking">
                        Book consultation
                    </Link>
                    <Link className="button-second ml-1" to="/contact">
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CommonBottom;