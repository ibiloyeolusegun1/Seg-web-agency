import React from "react";
import Header from "./components/Header/Header";
import { MdAnalytics } from "react-icons/md";
import './index.css';
import './App.css';
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
