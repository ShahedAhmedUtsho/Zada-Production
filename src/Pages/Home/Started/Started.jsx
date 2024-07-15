import React from 'react';
import { Link } from 'react-router-dom';

const Started = () => {
    return (
        
         <div className='min-h-[500px]  flex justify-center items-center started   '  >
           <div className='text-center mb-12 startedBox lg:pt-10'>
                        <h2 className="syne text-3xl mt-10 md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
                            Get <span className='scale-50 text-outline'>Started</span>
                        </h2>
                        <span className='border border-amber-600 inline-block min-w-28 '></span>
                        <p className='max-w-[550px] mx-auto text-center'> Aliquid magnam est quos autem reiciendis quia minus doloremque dignissimos animi! Iste corporis corrupti ea cupiditate laudantium tempore?</p>
                        <div className='flex justify-center items-center gap-2'>

                        <Link to="contact" className=' syne mt-10  max-w-40    px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100 bg-amber-600'>
                                    Contact me
                                </Link>
                                <button  className=' mt-10  max-w-40    px-[1em] py-[0.5em] text-sm lg:text-xl hover:bg-amber-700 transition-all duration-100  border border-current '>
                                    Let's work
                                </button>

                        </div>
                    </div>

     </div>
    );
};

export default Started;