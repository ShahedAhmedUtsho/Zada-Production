import React from 'react';

const AboutSection = () => {
    return (
        <div className=' min-h-screen bg-gray-500  lg:py-20 md:py-10 py-5  '>
            <div className='lg:container lg:mx-auto flex flex-col lg:flex-row md:mx-8 mx-4 gap-8 '>
            <div  className=' lg:min-h-screen bg-slate-50 gap-2   flex lg:block  w-full'>
            <div className="object-cover w-4/12  lg:w-full gap-2    lg:h-[600px]">
            <img className=' object-cover w-full h-full ' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/dr4lctx0s4me5ncsv2gr" alt="" />
</div>
<div className="object-cover lg:mt-8 w-8/12  lg:h-[400px] lg:w-[107%]  left-[-3.2vw] lg:relative ">
            <img className=' object-cover h-full w-full  ' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/wbx0qy6l1lsb23nii3tv" alt="" />
</div>

            </div>
            <div className='   min-h-screen w-full'>
                <div className='about lg:pl-10'>
                   
                    <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">About <span className=' scale-50 text-outline'> Zada</span></h2>
                    <span className='border border-amber-600 inline-block   min-w-28 '></span>
     
                    <p className="dm text-sm  mt-5   md:text-base  leading-9 tracking-normal mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse commodi laborum est illo fugit cum rem dicta doloribus unde!
                                </p>
                                <button className=' mt-10  max-w-40    px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100 bg-amber-600'>
                                    Let's work
                                </button>
                </div>
              <div className='bg-slate-200 w-full lg:h-[800px] mt-16 '>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/pfyygnfzv6xgoxdctqsj" alt="" />

              </div>
                
            </div >
            </div>
          
            
        </div>
    );
};

export default AboutSection;