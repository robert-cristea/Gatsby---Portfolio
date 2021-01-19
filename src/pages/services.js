import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from "gatsby"
import OurPartner from "../components/our_partners"
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs"
import PropTypes from "prop-types"
import CommonBottom from "../components/common_bottom"


const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState();

    return <button onClick={onClick}
        className={(isActive ? 'bg-grey' : 'bg-white') + " mr-6 border border-second py-3 text-center text-second uppercase"} style={{ width: 260 }}>{children}</button>;
};

Tab.propTypes = {
    children: PropTypes.node.isRequired,
};

const Panel = ({ children }) => {
    const isActive = usePanelState();

    return isActive ? <div className="w-full bg-grey px-10 md:px-32 py-10">{children}</div> : null;
};

Panel.propTypes = {
    children: PropTypes.node.isRequired,
};

function ServicePage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />
            <div className="relative">
                <img src={images.IMG_BG_SERVICES} className="fade-in"/>
                <div className="absolute bottom-0 px-10 md:px-32 pb-10 md:pb-48">
                    <p className="page-title">
                        Our Services
                    </p>
                </div>
            </div>

            <div className="px-10 md:px-32 py-6 md:py-12">
                <p className="text-center title">
                    Eyebrow microblading
                </p>
                <div className="flex flex-col md:flex-row pt-10">
                    <div className="w-full md:w-1/3 pb-10 md:pb-2">
                        <p className="heading pb-16">
                            Technically, microblading is a form of eyebrow tattooing. But unlike traditional tattooing, which uses a machine, microblading artist applies each hair stroke with a handheld microblade.
                        </p>
                        <Link className="button-primary" to="/booking">Book consultation</Link>
                    </div>
                    <div className="w-full md:w-2/3 pl-0 md:pl-20">
                        <p className="content pb-8">
                            This creates a very fine line that resembles real hair. Each individual hair stroke is manually drawn by the artist and blended in with the client’s existing eyebrow hair.
                            <br /> <br />
                            Microblading typically takes two appointments to complete. In the first appointment, you are profiled and the eyebrows are drawn on with a waterproof pencil so you and the artist can agree on the look. The artist will then microblade the eyebrows, advise you on the aftercare, and then you are ready to go back into the world.
                            <br /> <br />
                            Perfectly groomed brows frame the face elegantly, imparting a more youthful, lifted appearance. It also adds structure that helps define features. Waxing, threading, and plucking are effective maintenance procedures, but they are time-consuming and require daily upkeep. This is where microblading comes in.
                            <br /> <br />
                            Some mild itching and, in some cases, flaking may occur during the healing process. However, with proper aftercare, your microblading should be completely healed in 7 days.
                        </p>
                    </div>
                </div>
            </div>

            <Tabs>
                <div className="px-10 md:px-32">
                    <Tab>Before the Procedure</Tab>
                    <Tab>Aftercare</Tab>
                </div>

                <Panel>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 pr-20">
                            <p className="heading">
                                The following restrictions are to ensure that your skin is in the best possible condition for an amazing microblading procedure. Please read carefully.
                            </p>
                        </div>
                        <div className="w-full md:w-2/3 pl-0 md:pl-10">
                            <p className="content">
                                • Be sure to set aside 2-3 hours for your appointment.<br />
                                • You won’t be able to get your hair wet for 3 days, so shower and wash it before your
                                appointment.<br />
                                • Do not work out on the day of the treatment as the body heat will expand the pores.<br />
                                • Stay away from heavy sunlight, and getting sunburnt, 7 days before the procedure.<br />
                                • Do not drink more than one cup of coffee or anything with caffeine on the day of the
                                procedure.<br />
                                • DO NOT take Aspirin, Niacin, Vitamin E, Ibuprofen, and Omega-3 or fish oil unless medically
                                necessary 48-72 hours prior to the procedure.<br />
                                • Avoid drinking alcohol 24 hours before the procedure.<br />
                                • Avoid the following treatments within 2-4 weeks of the procedure:<br />
                                - Botox or Other Fillers<br />
                                - Chemical Peels<br />
                                - Laser Treatments<br />
                            </p>
                        </div>
                    </div>
                </Panel>
                <Panel><p>Panel 2</p></Panel>
            </Tabs>

            <div className="px-10 md:px-32 py-10">
                <p className="heading1 pb-6 md:pb-10">Our Rates</p> 
                <div className="flex border-b border-third py-2 mb-3">
                    <p className="w-3/4">Microblading (Including Retouch After 4-8 Weeks)Ombre (Powder) Eyebrows</p>
                    <p className="w-1/4">£480</p>
                </div>
                <div className="flex border-b border-third py-2 mb-3">
                    <p className="w-3/4">Ombre (Powder) Eyebrows</p>
                    <p className="w-1/4">£480</p>
                </div>
                <div className="flex border-b border-third py-2 mb-3">
                    <p className="w-3/4">Colour Boost (After 12-24 Months)</p>
                    <p className="w-1/4">£200 - £350</p>
                </div>
            </div>

            <OurPartner />

            <CommonBottom />

        </Layout>
    );
}


export default ServicePage;

