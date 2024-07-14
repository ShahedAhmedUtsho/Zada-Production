import React from 'react';
import ColorGrid from '../../Components/colors/Colors';
import Bannar from './Bannar/Bannar';
import AboutSection from './AboutSection/AboutSection';
import ServicesSection from './ServicesSection/ServicesSection';
import TeamSection from './Team/TeamSection';
import LetestWork from './LetestWork/LetestWork';
import HowIWork from './HowIWork/HowIWork';



const Home = () => {
    return (
        <div className='min-h-screen '>


<Bannar/>
<AboutSection/>
<ServicesSection/>
<LetestWork/>
<HowIWork/>
<TeamSection/>


        </div>
    );
};

export default Home;