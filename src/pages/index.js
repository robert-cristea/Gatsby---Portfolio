import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import OurPartners from "../components/our_partners"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import CommonBottom from "../components/common_bottom"

function IndexPage() {
  const { phoneNumber, email } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="relative">
        <img src={images.IMG_BG_HOME} className="fade-in"/>
        <div className="absolute bottom-0 px-10 md:px-32 pb-10 md:pb-32">
          <p className="page-title">
            Permanent Makeup
          </p>
          <p className="page-desc">
            Treatments London
          </p>
        </div>
      </div>

      <div className="px-10 md:px-32 py-6 md:py-12">
        <p className="text-center title">
          The complete destination for brow perfection!
        </p>
        <div className="flex flex-col md:flex-row pt-10">
          <div className="w-full md:w-1/3 pb-10 md:pb-2">
            <p className="heading pb-16">
              Most woman are frustrated about having to pencil their eyebrows every single day, no matter what you do they never seem to be perfect, they don’t match, they smudge, run down your face after coming out of pool. Who wants that?
            </p>
            <Link className="button-primary" to="/booking">Book consultation</Link>
          </div>
          <div className="w-full md:w-2/3 pl-0 md:pl-20">
            <p className="heading pb-8">
              Award winning Microblading treatment <br />( Semi-permanent makeup)
            </p>
            <p className="content pb-8">
              Whether you are looking for a full eyebrow reconstruction or you just want to enhance your current brows, Feather Touch will work with you to shape a look that is elegantly understated, effortlessly natural, and perfectly defined. We offer permanent makeup treatments that create subtle changes yet make a real impact on how you look and feel. Contact us in our clinics in London for a consultation
            </p>
            <p className="content pb-8">
              We offer a bespoke eyebrow sculpting and design service to suit your needs. Whether your eyebrows are thin and sparse or very fair, we can help you achieve the look you desire and deserve
            </p>
          </div>
        </div>
      </div>

      <div className="px-10 md:px-32 py-6 md:py-12">
        <p className="heading1 pb-10">Our Services</p>
        <div className="flex flex-col md:flex-row">
          <img src={images.IMG_SERVICES} className="pb-6 md:pb-2" />
          <div className="pl-0 md:pl-24">
            <p className="title pb-8">Eyebrow microblading</p>
            <p className="content pb-8">
              Perfectly groomed brows frame the face elegantly, imparting a more youthful, lifted appearance.
            </p>
            <Link to="#">
              <span className="link">Learn More</span>
            </Link>
          </div>
        </div>
      </div>

      <OurPartners />

      <div className="flex flex-col md:flex-row pr-10 md:pr-0 pl-10 md:pl-32 mt-10 py-6 justify-between">
        <div className="w-full md:w-1/5">
          <p className="heading1 pb-8">Locations</p>
          <p className="content leading-loose pb-2">
            Harley Street One Ltd <br />
            1 Harley St <br />
            Marylebone <br />
            London W1G 9QD <br />
          </p>
          <Link to="#">
            <span className="link">Get Directions</span>
          </Link>
          <p className="content leading-loose pt-6 pb-2">
            Naked health Clinic <br />
            261 - 263 Coombe Ln<br />
            Wimbledon<br />
            London SW20 0RH<br />
          </p>
          <Link to="#">
            <span className="link">Get Directions</span>
          </Link>
          <p className="phone-number text-lg pt-16">{phoneNumber}</p>
          <p className="content pb-4">{email}</p>
        </div>
        <img src={images.IMG_BG_LOC} />
      </div>

      <div className="flex flex-col md:flex-row px-10 md:px-32 py-6 justify-between">
        <div className="w-full md:w-1/3">
          <p className="heading1">Meet Kamila</p>
          <p className="heading pb-6">Aesthetic therapist & Founder</p>
          <p className="content pb-6">Kamila has 15 years of experience in the aesthetic industry and semi- permanent makeup, she has practised in various exclusive location in London.</p>
          <Link to="#">
            <span className="link">Learn More</span>
          </Link>
        </div>
        <div><img src={images.IMG_PHOTO} className="mx-auto my-4 md:my-0 pr-10 object-none" /></div>
        
        <div className="w-full md:w-1/3 pl-4">
          <p className="content1">
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; I had my eyebrows done 2 weeks ago and I’m so in love with them! They are perfect! I wasn’t sure what to expect, but Kamila was fantastic and really made me feel at ease. They look so natural and still look fab with no make up on!
            Would recommend everyone to get this treatment done!
          </p>
          <p className="heading4 float-right pt-4">
            Katie Askew
          </p>
        </div>
      </div>

      <CommonBottom />
    </Layout>
  );
}


export default IndexPage;

