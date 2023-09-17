import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
   <section className="hero-wrapper">
        <div className="hero-container">
            <div className="vert-text">
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
            </div>
            <div className="hero-content">
                <div className="text">
                    <h1>We are <br /> digital agency</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum consequatur ipsam voluptatem? Molestiae voluptatibus, libero sequi soluta ad atque in cupiditate laboriosam id quia voluptates ea quidem consequuntur? Eum libero tempore ex voluptate temporibus!</p>
                    <button className="btn">Learn more</button>
                    <div className="hero-no">
                        <div className='hero-num'>
                            <div>01</div>
                            <div className="progress">
                                <div className="prog-top"></div>
                                <div className="prog-bottom"></div>
                            </div>
                            <div>03</div>
                        </div>
                    </div>
                </div>
                <img src="./hero.jpg" alt="hero" width={500} />
            </div>
        </div>
   </section>
  )
}

export default Hero
