import React from "react";
import { Helmet  } from "react-helmet-async";
import ColorGrid from "../../Components/colors/Colors";
import Bannar from "./Bannar/Bannar";
import AboutSection from "./AboutSection/AboutSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import TeamSection from "./Team/TeamSection";
import LetestWork from "./LetestWork/LetestWork";
import HowIWork from "./HowIWork/HowIWork";
import Started from "./Started/Started";

const Home = () => {
  return (
    
      <div className="min-h-screen">
        <Helmet>
          <title>Welcome to Zada Production</title>
          <meta
            name="description"
            content="Grow your business with Zada Production. We offer videography, photography, studio, digital marketing, and web development services."
          />
          <meta
            name="keywords"
            content="Zada Production, videography, photography, digital marketing, web development , services"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.zadaproduction.tech/" />
          <meta property="og:title" content="Welcome to Zada Production" />
          <meta
            property="og:description"
            content="Grow your business with Zada Production. We offer videography, photography, studio, digital marketing, and web development services."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.zadaproduction.tech/" />
          <meta property="twitter:title" content="Welcome to Zada Production" />
          <meta
            property="twitter:description"
            content="Grow your business with Zada Production. We offer videography, photography, studio, digital marketing, and web development services."
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/dmcmxmqpw/image/upload/f_auto,q_auto/bujeu0wbupaf9tgbf8b7"
          />
        </Helmet>
        <Bannar />
        <AboutSection />
        <ServicesSection />
        <LetestWork />
        <HowIWork />
        <Started />
        <TeamSection />
      </div>
  
  );
};

export default Home;
