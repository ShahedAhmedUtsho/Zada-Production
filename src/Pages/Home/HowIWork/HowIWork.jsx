
import { CalendarBlank, Camera, Image } from 'phosphor-react';
import React from 'react';

const HowIWork = () => {
    return (
        <div className='lg:min-h-[80vh] bg-stone-950 bg-opacity-50 lg:py-16 md:py-10 py-5'>
        <div className="lg:container md:mx-8 mx-4 lg:mx-auto">
            <div className='text-center mb-12'>
                <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight mb-4">
                    How I <span className='scale-50 capitalize text-outline'>Work</span>
                </h2>
                <span className='border border-amber-600 inline-block min-w-28'></span>
            </div>

<div className="min-h-[550px]  flex lg:flex-row flex-col gap-20">


    <div className="  flex flex-col gap-5 items-center justify-center   w-full  ">
        <div className='min-h-32 w-full flex justify-between  gap-5  '>
            <div className=''>
                
<CalendarBlank size={40}  className=' text-amber-600   border border-current p-2 box-content' />
            </div>
            <div className='pt-4'>
            <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4">Booking</h5>
            <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">This is a smaller paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptatum.
            </p>
                                
            </div>
        </div>
        <div className='min-h-32 w-full flex justify-between  gap-5  '>
            <div className=''>
<Camera size={40} className=' text-amber-600  border border-current p-2 box-content' />
            </div>
            <div className='pt-4'>
            <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4">Shooting</h5>
            <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">This is a smaller paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptatum.
            </p>
                                
            </div>
        </div>
        <div className='min-h-32 w-full flex justify-between  gap-5  '>
            <div className=''>
<Image size={40} className=' text-amber-600  border border-current p-2 box-content' />
            </div>
            <div className='pt-4'>
            <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4"> Edit & Rendering</h5>
            <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">This is a smaller paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptatum.
            </p>
                                
            </div>
        </div>
        <div className='min-h-32 w-full flex justify-between  gap-5  '>
            <div className=''>
<Image size={40} className=' text-amber-600  border border-current p-2 box-content' />
            </div>
            <div className='pt-4'>
            <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4"> Final result</h5>
            <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">This is a smaller paragraph. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptatum.
            </p>
                                
            </div>
        </div>
    
       

    </div>
    <div className="  w-full bg-slate-700  ">
        <img className='object-cover w-full h-full' src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/crztbawm7ktgtyhtl6cn" alt="" />

</div>

</div>


            </div>
            </div>
    );
};

export default HowIWork;