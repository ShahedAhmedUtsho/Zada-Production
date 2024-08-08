import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const ServicesSection = () => {
    const services = [
        {
            title: "Digital Marketing",
            description: "Maximize your online presence with our digital marketing strategies, including SEO, social media management, content marketing, and PPC campaigns. Our goal is to drive traffic and boost conversions."
        },
        {
            title: "Photography",
            description: "Our photography services capture your brand's essence with stunning visuals. We specialize in corporate portraits, product shots, and event coverage using the latest techniques and equipment."
        },
        {
            title: "Videography",
            description: "Engage your audience with high-definition video content. Our videography team brings your vision to life, ensuring every frame reflects your brand's identity and communicates your message effectively."
        },
        {
            title: "Web Development",
            description: "Create a stunning and functional online presence with our web development services. We design and build responsive websites that are user-friendly, optimized for performance, and tailored to your business needs."
        },
        {
            title: "Graphic Design",
            description: "Our graphic design services visually communicate your message. From brochures to social media graphics, our designers produce creative and strategic designs that capture attention and inspire action."
        },
        {
            title: "Editing",
            description: "Enhance your visual content with our professional editing services. Our editors refine your photos and videos, focusing on details to ensure they meet the highest quality standards."
        }
    ];

    return (
        <div className='lg:min-h-[80vh] globalBG lg:py-16 md:py-10 py-5'>
            <div className="lg:container md:mx-8 mx-4 lg:mx-auto">
                <div className='max-w-[580px]'>
                    <Fade delay={100} triggerOnce>
                        <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                            ZaDa <span className='scale-50 text-outline'>Services</span>
                        </h2>
                    </Fade>
                    <Fade delay={200} triggerOnce>
                        <span className='border border-amber-600 inline-block min-w-28'></span>
                    </Fade>
                    <Fade delay={300} triggerOnce>
                        <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal mb-4">
                            Explore our comprehensive services designed to elevate your business:
                        </p>
                    </Fade>
                </div>
                <div className="grid lg:grid-cols-2 justify-between md:gap-10 lg:gap-32 gap-3 mt-14 items-center">
                    {services.map((service, index) => (
                        <Slide key={index} direction="up" delay={150 * index} triggerOnce>
                            <div className="min-h-44 grid mt-5 md:mt-0 gap-10 lg:gap-0 grid-cols-5 border-slate-500 border-b">
                                <div className='col-span-1'>
                                    <Zoom delay={200 * index} triggerOnce>
                                        <span className="syne text-4xl -mt-4 md:text-5xl text-amber-600 lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                                            {`0${index + 1}`}
                                        </span>
                                    </Zoom>
                                </div>
                                <div className='col-span-4'>
                                    <Zoom delay={250 * index} triggerOnce>
                                        <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight uppercase mb-4">
                                            {service.title}
                                        </h4>
                                    </Zoom>
                                    <Zoom delay={300 * index} triggerOnce>
                                        <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal mb-4">
                                            {service.description}
                                        </p>
                                    </Zoom>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
