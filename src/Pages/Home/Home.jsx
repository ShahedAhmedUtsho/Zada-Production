import React from 'react';
import ColorGrid from '../../Components/colors/Colors';
import Bannar from './Bannar/Bannar';
import AboutSection from './AboutSection/AboutSection';
import ServicesSection from './ServicesSection/ServicesSection';
import TeamSection from './Team/TeamSection';



const Home = () => {
    return (
        <div className='min-h-screen '>


<Bannar/>
<AboutSection/>
<ServicesSection/>


<TeamSection/>


        </div>
    );
};

export default Home;