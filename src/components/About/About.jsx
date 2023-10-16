import React from 'react';
import "./About.css";
import { BiDesktop, BiPaintRoll, BiBarChartAlt2, BiDiamond, BiDetail, BiBrush } from 'react-icons/bi';

const About = () => {
  return (
    <section className="about" id='about'>
        <div className="about-container padding inner-w">
            <h1>What we do</h1>
            <div className="about-content">
                <div className="box">
                    <h2>APP DEVELOPMENT</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiDesktop/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>WEBSITE DEVELOPMENT</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiDetail/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>UI/UX DESIGNING</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiBrush/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>DIGITAL MARKETING</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiDiamond/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>SEO & CONTENT WRITING</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiBarChartAlt2/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>GRAPHIC DESIGNING</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card content in the box</p>
                    <a href="#">Contact us</a>
                    <div className="icon">
                        <BiPaintRoll/>
                    </div>
                    <div className="blue"></div>
                </div>
                <div className="box">
                    <h2>SOLUTION FOR <br /> YOUR BUSINESS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                    <div className="btn">
                        Learn more
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
