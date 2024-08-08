import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const AboutSection = () => {
    return (
        <div className=' min-h-screen bg-gray-500  lg:py-20 md:py-10 py-5  '>
            <div className='lg:container lg:mx-auto flex flex-col lg:flex-row md:mx-8 mx-4 gap-8 '>
            <div  className=' lg:min-h-screen  gap-2   flex lg:block  w-full'>
            <Fade className="object-cover w-4/12  lg:w-full gap-2    lg:h-[600px]">
            <img className=' object-cover w-full h-full ' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/dr4lctx0s4me5ncsv2gr" alt="" />
</Fade>
<div className='w-8/12 md:w-full  relative'>
<Fade className="object-cover lg:mt-8 w-full  lg:h-[400px] lg:w-[107%]  right-0 lg:absolute  ">
            <img className=' object-cover h-full w-full  ' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/wbx0qy6l1lsb23nii3tv" alt="" />
</Fade>
</div>

            </div>
            <div className='   min-h-screen w-full'>
                <Fade className='about lg:pl-10'>
                   
                    <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">About <span className=' scale-50 text-outline'> Zada</span></h2>
                    <span className='border border-amber-600 inline-block   min-w-28 '></span>
     
                    <p className="dm text-sm  mt-5   md:text-base  leading-9 tracking-normal mb-4">
                    At Zada Production, we specialize in driving business growth through comprehensive creative solutions. Our services include professional videography and photography for functions, state-of-the-art studio facilities, impactful digital marketing strategies, and cutting-edge website development. We are committed to delivering high-quality results that elevate your brand and connect you with your audience. Trust us to transform your vision into reality and take your business to new heights
                                </p>
                                <button className=' mt-10  max-w-40    px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100 bg-amber-600'>
                                    Learn more
                                </button>
                </Fade>
              <Fade className='bg-slate-200 w-full lg:h-[800px] mt-16 '>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/pfyygnfzv6xgoxdctqsj" alt="" />

              </Fade>
                
            </div >


            
            </div>
          
            
        </div>
    );
};

export default AboutSection;