import React from "react";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from "gatsby"
import OurPartners from "../components/our_partners"


function AboutPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />
            <div className="flex flex-col md:flex-row pr-10 md:pr-0 pl-10 md:pl-32 py-10 justify-between">
                <div className="w-full md:w-3/5 pr-4">
                    <p className="title1 pb-6">About us</p>
                    <p className="content pb-4">
                        Kamila has 15 years of experience in the aesthetic industry and semi- permanent makeup, she has practised in various exclusive location in London. Through the years, Kamila continued her education in two countries. She has mastered the art of microblading through numerous courses and hours of practice. Kamila have achieved high level of experience in the art of microblading, which has been previously awarded. Kamila’s background in nursing and clinical skin therapies, gives her deep understanding of skin as well as an excellent grasp of how to marry colour and shape to bring the best out of clients’ features
                        <br /><br />
                        Kamila has been trained by Theresa Fletcher of Dermace as well as Bioutouch UK and Katerina Zapletalova, one of the UK’s leading experts in the semi-permanent cosmetics field.
                        <br /><br />
                        She uses the most sophisticated and technologically advanced system available to date, along with pigments of the purest quality, which carry a certificate to verify hygiene and pharmaceutical grade.
                    </p>
                </div>
                <img src={images.IMG_BG_ABOUT} className="fade-in" />
            </div>

            <OurPartners />

            <div className="flex flex-col md:flex-row px-10 md:px-32 py-10 mb-10">
                <div className="w-full md:w-1/3 mr-12">
                    <p className="heading1 pb-6">Our Services</p>
                    <p className="content pb-8 leading-loose">
                        My true desire is to deliver superior results to every client I treat. I always strive to help others to feel confident and their best in every situation. My background in aesthetics and art gave me the skills to recognise the best way to treat every client individually and create the most natural and subtle look. My passion for work is very much reflected in my work.
                        <br /><br />
                        As a client of Feather Touch, you can rest assured that you will receive a high-quality treatment, which is bespoke to you.
                    </p>
                    <p className="heading4 mb-8 md:mb-16">Kamila Wojtylko</p>
                    <Link className="button-primary mb-6" to="/booking">Book consultation</Link>
                </div>
                <div>
                    <img src={images.IMG_PHOTO2} className="object-none mx-auto mt-16 md:mt-0" />
                </div>
            </div>
            
        </Layout>
    );
}


export default AboutPage;

