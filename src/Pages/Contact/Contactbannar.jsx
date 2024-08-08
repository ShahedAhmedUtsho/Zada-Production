import React from 'react';
import { Parallax } from 'react-parallax';

const ContactBanner = () => {
    return (
     
          <Parallax
            className='relative w-full bg-cover bg-center  object-cover  lg:h-[400px] '
            bgImage='https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/vsfh152f3hnef1xvaq8p'
            strength={300} 
            bgImageStyle={{objectFit : 'cover'}}
        >
           
            <div className='  text-center  w-full h-full lg:h-[400px] flex justify-center items-center flex-col bg-opacity-50 bg-black '>
                <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight text-white mb-4">
                    Contact Us
                </h2>
                <p className="syne max-w-[550px] mx-auto text-center text-white text-base md:text-lg leading-relaxed tracking-normal mb-4">This is a Were here to answer any questions or inquiries you may have. Whether youre interested in our services or just want to learn more, dont hesitate to reach out. Lets start a conversation!.</p>
                <p className='max-w-[550px] mx-auto text-center text-white'>
                    
                </p>
            </div>
        </Parallax>
        
       
    );
};

export default ContactBanner;
