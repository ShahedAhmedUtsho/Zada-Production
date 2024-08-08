import React from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'; // Adjust based on available icons
import { Helmet } from 'react-helmet-async';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade } from 'react-awesome-reveal';

const teamMembers = [
    {
        name: 'Mohammad Emon',
        position: 'PHOTOGRAPHER',
        image: 'https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/gbaaezrtvq0kuigmaykd',
        facebook: 'https://www.facebook.com/Md.imon.4',
        twitter: 'https://twitter.com/alicejohnson',
        linkedin: 'https://linkedin.com/in/alicejohnson',
    },
    {
        name: 'Mohammad Sujon',
        position: 'GRAPHIC DESIGNER',
        image: 'https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/qla6mo4shrfj42wrrdng',
        facebook: 'https://www.facebook.com/profile.php?id=100046861924874',
        twitter: 'https://twitter.com/charliebrown',
        linkedin: 'https://linkedin.com/in/charliebrown',
    },
    {
        name: 'Tuhin Siddique',
        position: 'PROJECT MANAGER',
        image: 'https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/ilc7lx1a2nc1baxd2sxh',
        facebook: 'https://facebook.com/dianaprince',
        twitter: 'https://twitter.com/dianaprince',
        linkedin: 'https://linkedin.com/in/dianaprince',
    },
    {
        name: 'Shahed Ahmed',
        position: 'Developer',
        image: 'https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/k8ufn5cdjq9egk6z5pgb',
        facebook: 'https://www.facebook.com/iAmShahedAhmed',
        twitter: 'https://twitter.com/bobsmith',
        linkedin: 'https://linkedin.com/in/bobsmith',
    },
    {
        name: 'Abu Zada',
        position: 'Media Manager',
        image: 'https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/z4cqwmxy1w6hlj5tc51r',
        facebook: 'https://www.facebook.com/profile.php?id=100008803711247',
        twitter: 'https://twitter.com/eveadams',
        linkedin: 'https://linkedin.com/in/eveadams',
    },
];

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow hidden md:flex justify-center items-center custom-next" onClick={onClick}>
        <ChevronRight />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow hidden md:flex justify-center items-center custom-prev" onClick={onClick}>
        <ChevronLeft />
    </div>
);

const TeamSection = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease',
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='py-20 px-4 lg:px-10 mt-20 bg-zinc-700'>
            <Helmet>
                {/* <title>Meet the Team | Zada Production</title> */}
                <meta name="description" content="Meet the talented and dedicated team members at Zada Production. Our team of professionals includes photographers, graphic designers, project managers, developers, and media managers." />
                <meta name="keywords" content="Zada Production team, photographers, graphic designers, project managers, developers, media managers" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.zadaproduction.tech/about" />
                <meta property="og:title" content="Meet the Team | Zada Production" />
                <meta property="og:description" content="Meet the talented and dedicated team members at Zada Production. Our team of professionals includes photographers, graphic designers, project managers, developers, and media managers." />
                <meta property="og:image" content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.zadaproduction.tech/about" />
                <meta property="twitter:title" content="Meet the Team | Zada Production" />
                <meta property="twitter:description" content="Meet the talented and dedicated team members at Zada Production. Our team of professionals includes photographers, graphic designers, project managers, developers, and media managers." />
                <meta property="twitter:image" content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7" />
            </Helmet>

            <h2 className='syne text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-10'>
                Zada <span className='scale-50 text-outline'>Team</span>
            </h2>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div key={index} className='p-4'>
                        <Fade triggerOnce>
                            <div className='relative group'>
                                <div className='overflow-hidden relative'>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className='object-cover w-full h-72 transition-transform duration-300 ease-in-out group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 flex items-center justify-center top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50'>
                                        <div className='flex space-x-4 mt-44'>
                                            {member.facebook && (
                                                <a
                                                    href={member.facebook}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-white p-2 border-[0.5px] border-current rounded-full hover:bg-white !bg-opacity-30 transition-all'
                                                >
                                                    <Facebook />
                                                </a>
                                            )}
                                            {member.twitter && (
                                                <a
                                                    href={member.twitter}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-white p-2 border-[0.5px] border-current rounded-full hover:bg-white !bg-opacity-30 transition-all'
                                                >
                                                    <Twitter />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='text-white p-2 border-[0.5px] border-current rounded-full hover:bg-white !bg-opacity-30 transition-all'
                                                >
                                                    <Linkedin />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-1">{member.name}</h5>
                                    <p className="syne text-sm uppercase text-amber-600 leading-relaxed tracking-normal mb-4">{member.position}</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamSection;
