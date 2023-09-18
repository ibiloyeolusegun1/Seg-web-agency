import React from "react";
import Header from "./components/Header/Header";
import { MdAnalytics } from "react-icons/md";
import './index.css';
import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
