/** @jsxImportSource @emotion/react */

import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../src/contexts/app/app.provider';
import theme from '../src/theme';
import SEO from '../src/components/seo';
import Layout from '../src/components/layout';
// import SalonBanner from '../src/sections/salon-banner';
import Banner from '../src/sections/book-banner';
import SalonCustomFooter from '../src/components/footer/salon-custom-footer';
// import KeyFeature from '../src/sections/key-feature';
// import CoreFeature from '../src/sections/core-feature';
// import Feature from '../src/sections/feature-';
// import PartnerSection from '../src/sections/partner';
// import WorkFlow from '../src/sections/workflow';
// import TestimonialCard from '../src/sections/testimonial';
// import SecurePayment from '../src/sections/secure-payment';
// import Package from '../src/sections/package';
// import Faq from '../src/sections/faq';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../src/components/section-header';
import { QRCodeCanvas } from 'qrcode.react';

const socialDataLinks = [
    {
        'link':
            "https://www.linkedin.com/company/ai-bright/",
        'label': 'LinkedIn',
    },
    {
        'link':

            "https://www.instagram.com/ai_moov/?hl=fr",
        'label': 'Instagram',
    },
    {
        'link':
            "https://www.facebook.com/AIMOOV-103242335740853",
        'label': 'Facebook',
    }
]

export default function Salon() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout showFooter={false}>
                    <SEO title="AiMoov" />
                    <Banner />
                    {/* <SalonBanner /> */}
                    {/* <Feature /> */}

                    <section sx={{ variant: 'section.feature' }} id="feature" className='bg-white pt-16'>
                        <Container className='flex flex-col items-center' >
                            <SectionHeader
                                desc="Go Beyond unlimited features"
                                title="Réservez votre caméra maintenant et économisez 300€."
                            />


                            {/* <QRCodeCanvas value="https://212.227.181.69/booking/book" bgColor='white' fgColor={"black"} size={308} /> */}

                            <div className='flex flex-col justify-start gap-3 items-center bg-cBlue p-4 rounded-2xl shadow-2xl' >

                                <QRCodeCanvas value="https://212.227.181.69/booking/book" bgColor='white' fgColor={"black"} size={308} />
                                <p className='text-center text-white text-5xl font-bold '>Scan me</p>

                            </div>
                            {/* <div className=' flex flex-col items-center bg-cBlue p-5 rounded-2xl  hover:scale-125 duration-700 shadow-2xl'>

                                <QRCodeCanvas value="https://212.227.181.69/booking/book" bgColor='white' fgColor={"black"} size={208} />

                                <h2 className='text-5xl text-white   w- h-full font-bold text-center md:text-center p-7 '>
                                    Scan me
                                </h2>
                            </div> */}
                        </Container>
                    </section>

                    <section sx={{ variant: 'section.feature' }} id="feature" className='bg-white pt-16'>
                        <Container className='flex flex-col items-center' >
                            <SectionHeader
                                desc="Go Beyond unlimited features"
                                title="Découvrez l’univers AIMOOV et commencez à vous entrainer dès maintenant grâce à notre App:"
                            />

                            <div className='flex flex-col justify-start gap-3 items-center bg-cBlue p-4 rounded-2xl shadow-2xl' >

                                <QRCodeCanvas value="https://212.227.181.69/api/redirect" bgColor='white' fgColor={"black"} size={308} />
                                <p className='text-center text-white text-5xl font-bold '>Scan me</p>

                            </div>
                        </Container>
                    </section>


                    <section sx={{ variant: 'section.feature' }} id="feature" className='bg-white pt-16 pb-32'>
                        <Container className='flex flex-col items-center' >
                            <SectionHeader
                                desc="Go Beyond unlimited features"
                                title="Abonnez vous et restez à l'écoute:"
                            />
                            <div className='flex justify-center items-center lg:gap-10'>
                                {
                                    socialDataLinks.map((item, index) => {
                                        return (<div key={index} className='flex flex-col justify-start gap-3 items-center bg-cBlue p-4 rounded-2xl shadow-2xl' >

                                            <QRCodeCanvas value={item.link} bgColor='white' fgColor={"black"} size={120} />

                                            <p className='text-center text-white text-xl font-normal '>{item.label}</p>
                                        </div>);
                                    })

                                }
                            </div>



                        </Container>
                    </section>
                    {/* <CoreFeature /> */}
                    {/* <PartnerSection /> */}
                    {/* <WorkFlow /> */}
                    {/* <TestimonialCard /> */}
                    {/* <SecurePayment />
          <Package /> */}
                    {/* <Faq /> */}

                    <SalonCustomFooter />

                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
