import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../Component/Hero";
import About from "../Component/AboutUs";
import FAQ from "../Component/FAQ";
import Footer from "../Component/Footer";
import Services from "../Component/Services";
import Header from "../Component/Header";
import Contact from "../Component/Contact";
import FeatureBar from "../Component/FeatureBar";
import Floating from "../Component/Floating";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
      mirror: true,
    });

    // refresh after render
    setTimeout(() => {
      AOS.refresh();
    }, 500);

  }, []);

  return (
    <>
      <Header />
      <Hero />
      <FeatureBar />
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