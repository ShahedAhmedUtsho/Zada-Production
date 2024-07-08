import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: "Photography",
            description: "Our photography services capture your brand's essence with stunning visuals. We specialize in corporate portraits, product shots, and event coverage using the latest techniques and equipment."
        },
        {
            title: "Videography",
            description: "Engage your audience with high-definition video content. Our videography team brings your vision to life, ensuring every frame reflects your brand's identity and communicates your message effectively."
        },
        {
            title: "Branding",
            description: "Build a strong, cohesive brand identity with our comprehensive branding services. We help define your brand's voice, design memorable logos, and create consistent branding materials."
        },
        {
            title: "Graphic Design",
            description: "Our graphic design services visually communicate your message. From brochures to social media graphics, our designers produce creative and strategic designs that capture attention and inspire action."
        },
        {
            title: "Editing",
            description: "Enhance your visual content with our professional editing services. Our editors refine your photos and videos, focusing on details to ensure they meet the highest quality standards."
        },
        {
            title: "Digital Marketing",
            description: "Maximize your online presence with our digital marketing strategies, including SEO, social media management, content marketing, and PPC campaigns. Our goal is to drive traffic and boost conversions."
        }
    ];
    
    

    return (
        <div className='lg:min-h-[80vh] globalBG lg:py-16 md:py-10 py-5'>
            <div className="lg:container md:mx-8 mx-4 lg:mx-auto">
                <div className='max-w-[580px]'>
                    <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">ZaDa <span className=' scale-50 text-outline'>
                    Services</span></h2>
                    <span className='border border-amber-600 inline-block min-w-28 '></span>
                    <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. O fugit cum rem dicta doloribus unde!
                    </p>
                </div>
                <div className="grid  lg:grid-cols-2 justify-between md:gap-10 lg:gap-32 gap-3 mt-14 items-center">
                    {services.map((service, index) => (
                        <div key={index} className="min-h-44 grid mt-5 md:mt-0  gap-10 lg:gap-0 grid-cols-5 border-slate-500 border-b ">
                            <div className='col-span-1 '>
                                <h2 className="syne text-4xl -mt-4 md:text-5xl text-amber-600 lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                                   
                                     {`0${index+1}`}
                                </h2>
                            </div>
                            <div className='col-span-4'>
                                <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight uppercase mb-4">
                                    {service.title}
                                </h4>
                                <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal mb-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
