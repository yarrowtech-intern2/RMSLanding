import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/AboutUs";
import FAQ from "../Component/FAQ";
import Footer from "../Component/Footer";
import Services from "../Component/Services";
import Header from "../Component/Header";
import Contact from "../Component/Contact";
import Floating from "../Component/Floating";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />  
      <Floating /> 
    </>
  );
};

export default Home;
