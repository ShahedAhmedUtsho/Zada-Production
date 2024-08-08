import React from 'react';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

const LatestWork = () => {
    return (
        <div>
            <div className='lg:min-h-[80vh] bg-stone-950 bg-opacity-50 lg:py-16 md:py-10 py-5'>
                <div className="lg:container md:mx-8 mx-4 lg:mx-auto">

                    {/* Fade for the title and border with Zoom effect */}
                    <Fade delay={100} triggerOnce>
                        <Zoom triggerOnce>
                            <div className='text-center mb-12'>
                                <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                                    Latest <span className='scale-50 text-outline'>Works</span>
                                </h2>
                                <span className='border border-amber-600 inline-block min-w-28'></span>
                            </div>
                        </Zoom>
                    </Fade>

                    {/* Fade for the first image and text with Slide effect */}
                    <Fade delay={200} triggerOnce>
                       
                            <div className="w-full md:h-[450px] lg:h-[700px] " >
                                <div className="md:flex w-full h-full gap-16">
                                    <div className='w-full flex flex-col'>
                                        <div className='bg-white md:h-[80%] w-full'>
                                            <img 
                                                src="https://res.cloudinary.com/dmcmxmqpw/image/upload/v1720330457/ipe3ae8zpqgkbclim7cl.jpg" 
                                                className='h-full md:max-h-none max-h-96 w-full object-cover'
                                                alt="Latest work"
                                            />
                                        </div>
                                        <div className='pt-10 lg:pt-16 md:h-[20%]'>
                                            <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight capitalize mb-4">
                                                Adventures With Mia
                                            </h4>
                                            <p className="syne text-sm md:text-base uppercase leading-relaxed tracking-normal text-amber-600 mb-4">
                                                CREATIVE, PORTRAIT
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full h-full'>
                                        <img 
                                            src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/iric9slklxy8a9vjukj2" 
                                            className='h-full md:max-h-none max-h-96 w-full object-cover'
                                            alt="Latest work"
                                        />
                                    </div>
                                </div>
                            </div>
                       
                    </Fade>

                    {/* Fade for the second set of images and text with Bounce effect */}
                    <Fade delay={300} triggerOnce>
                       
                            <Zoom className="w-full md:mt-20 md:h-[500px] lg:h-[900px]" triggerOnce>
                                <div className="flex flex-col md:flex-row  mt-10 w-full h-full gap-16">
                                    <div className='w-full flex md:order-1 order-2 flex-col'>
                                        <Slide className=' h-[80%] w-full' triggerOnce>
                                            <img 
                                                src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/gcrrgu164t3mkuwmovzx" 
                                                className='h-full md:max-h-none max-h-96 w-full object-cover'
                                                alt="Latest work"
                                            />
                                        </Slide>
                                        <Slide  triggerOnce>
                                        <div className='pt-10 lg:pt-16  h-[20%]'>
                                            <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight capitalize mb-4">
                                                Fictional after effect edit
                                            </h4>
                                            <p className="syne text-sm md:text-base uppercase leading-relaxed tracking-normal text-amber-600 mb-4">
                                                Fancy, Edit
                                            </p>
                                        </div>
                                        </Slide>
                                    </div>
                                    <div className='w-full md:order-2 order-1  flex flex-col'>
                                        <div className='md:h-[15%] lg:h-[20%]'>
                                            <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight capitalize mb-4">
                                                Zombie poster making
                                            </h4>
                                            <p className="syne text-sm md:text-base uppercase leading-relaxed tracking-normal text-amber-600 mb-4">
                                                CREATIVE, Poster
                                            </p>
                                        </div>
                                        <div className=' h-[65%] lg:h-[60%] w-full'>
                                            <img 
                                                src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/tcokyckgmqv6qupbcikm" 
                                                className='h-full md:max-h-none max-h-96 w-full object-cover' 
                                                alt="Latest work"
                                            />
                                        </div>
                                        <div className='md:pt-10 pt-5 lg:pt-16 md:h-[20%]'>
                                        <Slide  triggerOnce>
                                            <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight capitalize mb-4">
                                                Rended predator Making
                                            </h4>
                                            <p className="syne text-sm md:text-base uppercase leading-relaxed tracking-normal text-amber-600 mb-4">
                                                Fancy Edit
                                            </p>
                                            </Slide>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                       
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default LatestWork;
