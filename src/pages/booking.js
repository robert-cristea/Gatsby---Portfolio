import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import OurPartners from "../components/our_partners"

const BookingPage = () => {

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Contact"
            />
            <div className="pr-10 md:pr-0 pl-10 md:pl-32 py-10">
                <p className="title1 pb-12">Book an Appointment</p>
                <div className="flex flex-col md:flex-row w-7/10 pb-4">
                    <div className="w-full md:w-1/2 mr-12">
                        <p className="heading4 pb-6">First-time visit</p>
                        <p className="content">If you are new to the clinic we welcome you to book a free aesthetics consultation. Where we can assess your desires and introduce you to our team of practitioners.</p>
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-12 mt-6 md:mt-0">
                        <p className="heading4 pb-6">Returning Client</p>
                        <p className="content">Thank you for coming back to see us. Please complete the form below to book an appointment.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-7/10">
                    <form className="w-full md:w-1/2 mr-12"
                        name="book-consultation" method="POST" data-netlify="true">
                        <div className="mb-2">
                            <input className="form-input" name="fullName" id="input-full-name" type="text" placeholder="FULL NAME" required />
                        </div>
                        <div className="mb-2">
                            <input className="form-input" name="email" id="input-email" type="email" placeholder="EMAIL ADDRESS" required />
                        </div>
                        <div className="mb-2">
                            <input className="form-input" name="phoneNumber" id="input-phone-number" type="text" placeholder="PHONE NUMBER" required />
                        </div>
                        <button type="submit" className="button-primary">
                            Book consultation
                        </button>
                    </form>
                    <form className="w-full md:w-1/2 ml-0 md:ml-12 mt-6 md:mt-0"
                        name="book-appointment" method="POST" data-netlify="true">
                        <div className="mb-2">
                            <input className="form-input" name="fullName" id="input-full-name" type="text" placeholder="FULL NAME" required />
                        </div>
                        <div className="mb-2">
                            <input className="form-input" name="date" id="input-date" type="text" placeholder="PREFERRED DATE" required />
                        </div>
                        <button type="submit" className="button-primary">
                            Book appointment
                        </button>
                    </form>
                </div>
            </div>
            <OurPartners />
        </Layout>
    );
}

export default BookingPage;
