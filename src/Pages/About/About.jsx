import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import TeamSection from './TeamSection/TeamSection';
import { Fade, Slide } from 'react-awesome-reveal';

const About = () => {
    return (
        <div className='min-h-screen lg:py-20 md:py-10 py-5'>
            <Helmet>
                <title>About Zada | Zada Production</title>
                <meta name="description" content="ZaDa Production specializes in elevating your brand through expert videography, photography, digital marketing, branding, graphic design, and editing. We bring creativity and precision to every project for outstanding results." />
                <meta name="keywords" content="Zada Production, videography, photography, digital marketing, branding, graphic design, editing" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.zadaproduction.tech/about" />
                <meta property="og:title" content="About Us | Zada Production" />
                <meta property="og:description" content="ZaDa Production specializes in elevating your brand through expert videography, photography, digital marketing, branding, graphic design, and editing." />
                <meta property="og:image" content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.zadaproduction.tech/about" />
                <meta property="twitter:title" content="About Us | Zada Production" />
                <meta property="twitter:description" content="ZaDa Production specializes in elevating your brand through expert videography, photography, digital marketing, branding, graphic design, and editing." />
                <meta property="twitter:image" content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7" />
            </Helmet>
            <Fade>
                <div className='lg:container about lg:mx-auto flex flex-col lg:flex-row md:mx-8 mx-4 gap-8'>
                    <div className='gap-2 flex lg:block w-full'>
                        <div className="object-cover w-full gap-2 lg:h-[400px]">
                            <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7" alt="Zada Production" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='about lg:pl-10'>
                            <div>
                                <h2 className="syne text-4xl md:mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                                    About <span className='scale-50 text-outline'> Zada</span>
                                </h2>
                            </div>
                            <div>
                                <div className='border border-amber-600 inline-block min-w-28'></div>
                            </div>
                            <div>
                                <p className="dm text-sm mt-5 md:text-base leading-6 md:leading-9 tracking-normal mb-4">
                                    ZaDa Production specializes in elevating your brand through expert videography, photography, digital marketing, branding, graphic design, and editing. We bring creativity and precision to every project for outstanding results.
                                </p>
                            </div>
                            <div>
                                <button className='mt-10 max-w-40 px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100 bg-amber-600'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <TeamSection />
        </div>
    );
};

export default About;
