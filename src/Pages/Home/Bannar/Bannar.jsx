import React from 'react';

const Bannar = () => {
    return (
        <div className="globalBG">
            <div className='lg:container lg:mx-auto md:mx-8 mx-4 md:min-h-screen md:pb-20 bg-slate-900'>
                <div className='w-full flex globalBG h-full'>
                    <div className="md:max-h-screen !bg-transparent mt-24 lg:max-h-none w-5/12 globalBG">
                    <h2 className="syne text-4xl sm:text-5xl md:text-7xl lg:text-[8.9vw]  font-bold leading-tight tracking-tight mb-4">Zada</h2>
<h2 className="syne text-4xl text-amber-600 sm:text-5xl md:text-7xl lg:text-[8.9vw] relative lg:left-20 md:left-16 left-10  text-outline font-bold leading-tight tracking-tight mb-4">Production</h2>


{/*       
      <h6 className="syne text-base text-right pr-10 text-amber-600 md:text-lg lg:text-xl font-medium leading-snug tracking-widest mb-4">PHOTOGRAPHER & VISUAL ARTIST</h6> */}
    
      <p className="dm md:relative absolute lg:pl-32 md:pr-5 md:pl-20  pl-10 text-sm  md:text-base text-amber-600 leading-relaxed tracking-widest mb-4">PHOTOGRAPHER & VISUAL ARTIST</p>

                    </div>
                    <div className='w-7/12 overflow-hidden md:max-h-screen lg:max-h-none h-full'>
                        <img src="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/snpo67xklz3xfyshvfy4" alt="" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;


