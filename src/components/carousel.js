import React from "react"
import images from "../constants/images"

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel relative">
                <div className="carousel-inner relative overflow-hidden w-full my-auto">
                    <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" defaultChecked />
                    <div className="carousel-item absolute opacity-0  px-12 md:px-24 lg:px-40">
                        <div className="block h-full w-full text-center pb-8">
                            {/* Screen 1 */}
                            <p className="heading1 pb-2">Happy Clients</p>
                            <img src={images.IMG_FIVE_STARS} className="mx-auto pb-10" />
                            <p className="content2">
                                I had my eyebrows done 2 weeks ago and I’m so in love with them! They are perfect! I wasn’t sure what to expect, but Kamila was fantastic and really made me feel at ease. They look so natural and still look fab with no make up on!
                                <br /><br />
                                Would recommend everyone to get this treatment done!I can’t wait for my next visit to get my top up. Thanks Kamila for giving me beautiful eyebrows.
                            </p>
                            <p className="heading4 pt-6">
                                Katie Askew
                            </p>
                        </div>
                    </div>
                    <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden z-10 inset-y-0 left-0 my-auto">
                        <img src={images.IMG_LEFT_ARROW} className="align-middle object-none" />
                    </label>
                    <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <img src={images.IMG_RIGHT_ARROW} className="align-middle object-none" />
                    </label>

                    <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" />
                    <div className="carousel-item absolute opacity-0">
                        <div className="block h-full w-full text-grey text-5xl text-center">
                            {/* Screen 2 */}
                            Slide 2
                        </div>
                    </div>
                    <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden z-10 inset-y-0 left-0 my-auto">
                        <img src={images.IMG_LEFT_ARROW} className="align-middle object-none" />
                    </label>
                    <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <img src={images.IMG_RIGHT_ARROW} className="align-middle object-none" />
                    </label>

                    <input className="carousel-open hidden" type="radio" id="carousel-3" name="carousel" />
                    <div className="carousel-item absolute opacity-0">
                        <div className="block h-full w-full text-grey text-5xl text-center">
                            {/* Screen 3 */}
                            Slide 3
                        </div>
                    </div>
                    <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden z-10 inset-y-0 left-0 my-auto">
                        <img src={images.IMG_LEFT_ARROW} className="align-middle object-none" />
                    </label>
                    <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden z-10 inset-y-0 right-0 my-auto">
                        <img src={images.IMG_RIGHT_ARROW} className="align-middle object-none" />
                    </label>
                </div>
            </div >

        );
    }
}

export default Carousel;