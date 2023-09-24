import React from "react";
import Header from "./components/Header/Header";
// import { MdAnalytics } from "react-icons/md";
import './index.css';
import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
