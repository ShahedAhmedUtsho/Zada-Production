import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ContactBanner from './Contactbannar';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if(!formData.message){
            newErrors.message = "give a message"

        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log('Form submitted:', formData);
        // Add backend integration here
    };

    return (
        <div className='min-h-screen lg:py-20 md:py-10 mb-20 py-5 bg-[#1a1a1a] text-white'>
          
   <Fade >
   <div className='lg:container first-section lg:mx-auto mb-20 md:mx-8 mx-4 gap-8'>
    <ContactBanner/>
    </div>
   </Fade>


            <Fade delay={200}>
                <div className='lg:container lg:mx-auto flex flex-col lg:flex-row md:mx-8 mx-4 gap-8'>
                    <div className='gap-2 flex lg:block w-full'>
                        <div className="object-cover w-full gap-2  lg:h-full">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29234.192803865062!2d90.38401202539617!3d23.66615384521392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bbd8e2f4cd7b%3A0xaa02276ba1ae05a3!2sEkuria!5e0!3m2!1sen!2sbd!4v1723127945828!5m2!1sen!2sbd" 
                                className='w-full h-full'
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='lg:pl-10'>
                        <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">Send <span className=' scale-50 text-outline'> Message </span></h2>
                    <span className='border border-amber-600 inline-block   min-w-28 '></span>
     
                   
                            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                                <div className='flex flex-col md:flex-row md:space-x-4'>
                                    <div className='w-full'>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                            value={formData.firstName} 
                                            onChange={handleChange} 
                                            className={` block w-full px-3 lg:py-7 py-5   bg-transparent border-b border-gray-400 placeholder-gray-100 focus:outline-none focus:border-amber-600 focus:ring-amber-600 lg:text-lg text-gray-100    text-base ${errors.firstName && 'border-red-600'}`}
                                             
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                                        )}
                                    </div>
                                    <div className='w-full'>
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            placeholder="Last Name" 
                                            value={formData.lastName} 
                                            onChange={handleChange} 
                                            className={`mt-1 block w-full px-3 lg:py-7 py-5   bg-transparent border-b border-gray-400 placeholder-gray-100 focus:outline-none focus:border-amber-600 focus:ring-amber-600 lg:text-lg text-gray-100    text-base ${errors.lastName && 'border-red-600'}`}
                                            
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className={`mt-1 block w-full px-3 lg:py-7 py-5   bg-transparent border-b border-gray-400  placeholder-gray-100 focus:outline-none focus:border-amber-600 focus:ring-amber-600 lg:text-lg text-gray-100 bb   text-base ${errors.email && 'border-red-600'}`}
                                       
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                                    )}
                                </div>
                                <div className='mb-6'>
                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        className={`mt-1 block w-full h-40 px-3 lg:py-7 py-5   bg-transparent border-b border-gray-400  placeholder-gray-100 focus:outline-none focus:border-amber-600 focus:ring-amber-600 lg:text-lg text-gray-100   text-base ${errors.message && 'border-red-600'}`} 
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                                    )}
                                </div>
                                <div>
                                    <button type="submit" className='w-full py-4 px-4 text-white bg-amber-600 hover:bg-amber-700 transition-all duration-100'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
