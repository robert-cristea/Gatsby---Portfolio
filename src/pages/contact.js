import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Link } from "gatsby"

const ContactPage = () => {
  const { phoneNumber, email } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <div className="flex flex-col md:flex-row mx-10 md:mx-32 bg-primary my-8 px-8 md:px-24 py-5 md:py-10">
        <div className="w-full md:w-1/3 mr-0 md:mr-20">
          <p className="text-white font-caveat-regular text-3xl pb-6">Get in touch</p>
          <p className="text-black font-nexa-xbold font-extrabold pb-2">{phoneNumber}</p>
          <p className="pb-6">{email}</p>
          <p className="text-xs leading-relaxed pb-6">
            Harley Street One Ltd <br />
            1 Harley St <br />
            Marylebone <br />
            London W1G 9QD <br />
          </p>
          <div className="flex">
            <Link to="#" className="mr-6" ><img src={images.IC_INS_BLACK} /></Link>
            <Link to="#" ><img src={images.IC_FB_BLACK} /></Link>
          </div>
        </div>
        <form className="w-full md:w-2/3 pt-6" name="contact" method="POST" data-netlify="true">
          <div className="mb-2">
            <input className="form-input" name="firstName" id="input-first-name" type="text" placeholder="FIRST NAME" required />
          </div>
          <div className="mb-2">
            <input className="form-input" name="email" id="input-email" type="email" placeholder="EMAIL ADDRESS" required />
          </div>
          <div className="mb-2">
            <textarea name="message" className="form-input h-20"
              id="input-message" type="text" placeholder="MESSAGE" />
          </div>
          <button type="submit" className="w-full button-second">
            Submit
          </button>
        </form>
      </div>

    </Layout>
  );
}

export default ContactPage;
