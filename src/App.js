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

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Testimonial/>
      <Blog/>
    </div>
  );
}

export default App;
