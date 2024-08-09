import { CirclePlus } from 'lucide-react';
import React from 'react';

const TeamSection = () => {
    const team = [
        {
            name: "Abu Zada",
            role: "Media Manager",
            description: "Abu Zada manages our media presence, ensuring our content resonates with audiences across various platforms.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/z4cqwmxy1w6hlj5tc51r",
        },
        {
            name: "Shahed Ahmed",
            role: "Developer",
            description: "Shahed Ahmed is a skilled developer focused on creating seamless user experiences with clean, efficient code.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/k8ufn5cdjq9egk6z5pgb",
        },
        {
            name: "Mohammad Emon",
            role: "PHOTOGRAPHER",
            description: "Mohammad Emon captures stunning visuals with his keen eye for detail, making every moment memorable through his photography.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/gbaaezrtvq0kuigmaykd",
        },
        {
            name: "Mohammad Sujon",
            role: "GRAPHIC DESIGNER",
            description: "Mohammad Sujon brings creativity to life with his innovative designs, transforming ideas into visually captivating graphics.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/qla6mo4shrfj42wrrdng",
        },
        {
            name: "Tuhin Siddique",
            role: "PROJECT MANAGER",
            description: "Tuhin Siddique ensures projects are completed on time and within scope, coordinating all aspects to deliver successful outcomes.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/ilc7lx1a2nc1baxd2sxh",
        },
        
        
    ];
    

    return (
        <div className='lg:min-h-[80vh] globalBG lg:py-16 md:py-10 py-5'>
            <div className="lg:container md:mx-8 mx-4 lg:mx-auto">
                <div className='text-center mb-12'>
                    <h2 className="syne text-4xl mt-10 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                        ZaDa <span className='scale-50 text-outline'>Team</span>
                    </h2>
                    <span className='border border-amber-600 inline-block min-w-28'></span>
                    <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal mb-4">
                        Meet the talented and dedicated individuals behind our success. Each member brings unique skills and expertise to the table.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className=" shadow-sm shadow-slate-700 rounded-lg overflow-hidden flex">
                            <div className="w-1/3 flex h-44 justify-center items-center">
                                <img src={member.photo} alt={member.name} className=" w-full h-full object-cover object-center" />
                            </div>
                            <div className="p-4 w-2/3">
                                <h4 className="syne text-lg md:text-xl font-medium leading-snug tracking-tight uppercase mb-1">
                                    {member.name}
                                </h4>
                                <h5 className="syne text-sm md:text-base font-medium leading-snug tracking-tight mb-1 text-amber-600">
                                    {member.role}
                                </h5>
                                <p className="dm text-xs md:text-sm leading-6 tracking-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                     <div  className=" shadow-sm  shadow-slate-800 rounded-lg flex-col overflow-hidden bg-zinc-800 hover:bg-zinc-700  justify-center items-center gap-2 capitalize flex">
                     <CirclePlus size={30} />
                   
                                <span className="dm text-xs md:text-sm leading-6 tracking-normal">
                                    we are Hiring
                                </span>


                     </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
