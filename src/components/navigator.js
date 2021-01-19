import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from "../constants/images"

function Navigator() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <Location>
            {({ location }) => {

                const lastPos = location.pathname.lastIndexOf('/');
                const len = location.pathname.length;
                const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

                return (
                    <div className="flex flex-wrap justify-between lg:justify-start px-4 py-2 lg:py-6">
                        <Link to="/" className="my-auto">
                            <img src={images.IC_APP} className="object-fill w-32 lg:w-auto" />
                        </Link>

                        <button
                            className="flex float-right w-10 h-10 items-center p-3 my-2 text-black border border-white right-0 rounded lg:hidden"
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
                                } lg:flex lg:items-center text-center align-middle w-full lg:w-auto pl-8 pt-2`}
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
                                    className={"nav-item block mt-4 lg:inline-block lg:mt-0 lg:ml-6 mr-6"
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
    );
}



export default Navigator;