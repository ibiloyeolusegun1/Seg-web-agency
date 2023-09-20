import React from 'react';
import "./Work.css";


const Work = () => {
  return (
    <div>
        <section className="work">
            <div className="work-container padding inner-w">
                <h1>Our works</h1>
                <div className="work-content">
                    <div className="box">  
                        <img src="./work1.jpg" alt=""  className="not"/>
                        <img src="./work2.jpg" alt="" className="not"/>
                        <img src="./work3.jpg" alt="" className="not"/>
                    </div>
                    <div className="box-b">
                        <div className="not-b">
                            <h2>NOT IMPRESSED?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button className="btn">
                                Learn more
                            </button>
                        </div>
                        <img src="./work5.jpg" alt="" className="not-b"/>
                        <img src="./work4.jpg" alt="" className="not-b"/>
                    </div>
                </div>
            </div>
        </section>
        <div className="work-counter">
            <div className="counter-box">
                <div className="box">
                    <h1>9854</h1>
                    <span>project <br /> completed</span>
                </div>
                <div className="box">
                    <h1>840</h1>
                    <span>clients</span>
                </div>
                <div className="box">
                    <h1>321</h1>
                    <span>active <br /> clients</span>
                </div>
                <div className="box">
                    <h1>5410</h1>
                    <span>cup <br /> of coffee</span>
                </div>
                <div className="box">
                    <h1>9854</h1>
                    <span>project <br /> completed</span>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Work
