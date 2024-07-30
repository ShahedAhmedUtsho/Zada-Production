import { Settings } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-auto min-h-96 flex flex-col '>
           <div className='lg:container md:mx-8 mx-4 lg:mx-auto  min-h-96   '>
          

   
      <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight mb-4">Zada <br /> <span className=' relative left-10 text-outline'>Production</span></h2>
     
                       
                        <p className="dm md:relative uppercase   md:pr-5 text-sm md:text-base text-amber-600 leading-relaxed tracking-widest mb-4">
                           Grow your business With Zada
                        </p>
   

<div className="border min-h-40 flex justify-center  flex-wrap  items-center">
<p className="dm md:relative uppercase text-center   md:pr-5 text-sm md:text-base lg:text-2xl leading-relaxed tracking-widest mb-4">
Development in progress with Utsho <Settings size={30} className='  mx-3 mb-1 rotating-element'/>
                        </p>
   
</div>
           </div>
            
        </div>
    );
};

export default Footer;