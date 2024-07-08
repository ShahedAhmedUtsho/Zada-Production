import React from 'react';

const TeamSection = () => {
    const team = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            description: "John leads our team with over 20 years of experience in the industry. His vision and expertise drive our success.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        },
        {
            name: "Jane Smith",
            role: "Head of Marketing",
            description: "Jane oversees all marketing efforts, ensuring that our campaigns are effective and reach the right audience.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        },
        {
            name: "Mike Johnson",
            role: "Lead Photographer",
            description: "Mike's photography skills are unmatched. He captures stunning visuals that highlight our clients' brands.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        },
        {
            name: "Emily Davis",
            role: "Senior Designer",
            description: "Emily's creative designs are integral to our branding projects, bringing our clients' visions to life.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        },
        {
            name: "David Brown",
            role: "Head of Videography",
            description: "David's expertise in videography helps us create compelling video content that engages and informs.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        },
        {
            name: "Sarah Wilson",
            role: "Digital Marketing Specialist",
            description: "Sarah develops and executes digital marketing strategies that drive traffic and increase conversions.",
            photo: "https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/v1/samples/smile",
        }
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={member.photo} alt={member.name} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h4 className="syne text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight uppercase mb-2">
                                    {member.name}
                                </h4>
                                <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-2 text-amber-600">
                                    {member.role}
                                </h5>
                                <p className="dm text-sm mt-5 md:text-base leading-9 tracking-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
