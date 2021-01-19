import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from "../../constants/images"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function Footer() {
    const { phoneNumber, email } = useSiteMetadata()
    const [isExpanded, toggleExpansion] = useState(false);
    return (
        <footer className="w-full mx-auto" style={{ maxWidth: 1366 }}>
            <div className="bottom-bar" />
            <div className="flex justify-between px-4 py-4 md:py-0">
                <Location>
                    {({ location }) => {

                        const lastPos = location.pathname.lastIndexOf('/');
                        const len = location.pathname.length;
                        const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

                        return (
                            <div className="flex flex-wrap  justify-between md:justify-start px-4 py-2 md:py-6">
                                <Link to="/" className="my-auto">
                                    <img src={images.IC_APP_BOTTOM} className="object-fill w-32 md:w-auto" />
                                </Link>
                                <a href="https://www.facebook.com" className="hidden md:block my-auto" target="_blank" rel="noreferrer"><img src={images.IC_FB} className="ml-8 object-none inline-block" /></a>
                                <a href="https://www.instagram.com" className="hidden md:block my-auto" target="_blank" rel="noreferrer"><img src={images.IC_INS} className="ml-2 object-none inline-block" /></a>
                                <button
                                    className="flex float-right w-10 h-10 items-center p-3 my-2 text-white border border-white right-0 rounded md:hidden"
                                    onClick={() => toggleExpansion(!isExpanded)}

                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>

                                <nav
                                    className={`${
                                        isExpanded ? `block` : `hidden`
                                        } md:flex md:items-center align-middle w-full md:w-auto pl-8`}
                                >
                                    {[
                                        {
                                            route: `/`,
                                            title: `Home`,
                                        },
                                        {
                                            route: `/about`,
                                            title: `About`,
                                        },
                                        {
                                            route: `/services`,
                                            title: `Services`,
                                        },
                                        {
                                            route: `/booking`,
                                            title: `Book Appointment`,
                                        },
                                        {
                                            route: `/contact`,
                                            title: `Contact`,
                                        },
                                    ].map((link) => (
                                        <Link
                                            className={"nav-item block mt-4 md:inline-block md:mt-0 md:ml-6 mr-6"
                                                + (link.route == pathName ? " text-primary" : " text-black")}

                                            key={link.title}
                                            to={link.route}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </nav>


                            </div>
                        );
                    }}
                </Location>
                <div className="my-auto">
                    <p className="phone-number">{phoneNumber}</p>
                    <p className="content">{email}</p>
                    <Link className="text-primary font-nexa-regular text-xs" to="#">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
