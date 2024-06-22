import React from "react";
import Header from "../Commponants/Header/Header";
import Navbar from "../Commponants/Navbar/Navbar";
import Hero from "../Commponants/Hero/Hero";
import Improve from "../Commponants/Improve/Improve";
import About from "../Commponants/About/About";
import Service from "../Commponants/Service/Service";
import Ourservice from "../Commponants/Ourservice/Ourservice";
import Clint from "../Commponants/Client/Clint";
import Contact from "../Commponants/Contact/Contact";
import Footer from "../Commponants/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Improve />
      <About />
      <Service />
      <Ourservice />
      <Clint />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
