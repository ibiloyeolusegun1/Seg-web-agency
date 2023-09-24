import React from 'react';
import "./Testimonial.css";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Pagination, Navigation } from "Swiper/swiper";
// import { Pagination, Navigation } from 'swiper.mjs';


// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section className="testi" id="testi">
        <div className="testi-container padding inner-w">
            <div className="card">
                <img src="./review1.png" alt="" />
                <div className="card-detail">
                    <h2>Testimonials</h2>
                    <span className='name'>Ibiloye Loveth</span>
                    <span className='comp'>Comapany / CEO</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem facere cupiditate accusamus architecto harum ex libero ullam voluptate aperiam aliquam hic tenetur aliquid quia eaque in amet at, repellat nostrum dicta doloribus perferendis in similique, distinctio ipsam tempora perspiciatis veniam?</p>
                    <p className='secnd'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptatibus nobis adipisci obcaecati, doloremque expedita exercitationem ipsam perferendis incidunt laborum!</p>
                </div>
                <div className="testi-lines">
                    <div className="line">01</div>
                    <span className='active'></span>
                    <span></span>
                    <span></span>
                    <div className="line">03</div>
                </div>
            </div>
        </div>

        <div className="team-container">
            <h1>Our team</h1>
            <div className="card">
                <div className="card-box">
                    <img src="./review1.png" alt="" width={300}/>
                    <div className="details">
                        <h3>Loveth Oladele</h3>
                        <span className="ceo">Company / CEO</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt.</p>
                        <div className="social-icon">
                            <BiLogoFacebook/>
                            <BiLogoTwitter/>
                            <BiLogoInstagram/>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <img src="./review2.png" alt="" width={300}/>
                    <div className="details">
                        <h3>Loveth Oladele</h3>
                        <span className="ceo">Company / CEO</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt.</p>
                        <div className="social-icon">
                            <BiLogoFacebook/>
                            <BiLogoTwitter/>
                            <BiLogoInstagram/>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <img src="./review3.png" alt="" width={300}/>
                    <div className="details">
                        <h3>Loveth Oladele</h3>
                        <span className="ceo">Company / CEO</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt.</p>
                        <div className="social-icon">
                            <BiLogoFacebook/>
                            <BiLogoTwitter/>
                            <BiLogoInstagram/>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <img src="./review1.png" alt="" width={300}/>
                    <div className="details">
                        <h3>Loveth Oladele</h3>
                        <span className="ceo">Company / CEO</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt.</p>
                        <div className="social-icon">
                            <BiLogoFacebook/>
                            <BiLogoTwitter/>
                            <BiLogoInstagram/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial;

// const SliderButtons = () => {
//     const swiper = useSwiper();
//     return(
//         <div className="testi-button">
//             <button onClick={()=> swiper.slidePrev()}><FaArrowLeft/></button>
//             <button onClick={()=> swiper.slideNext()}><FaArrowRight/></button>
//         </div>
//     )
// }
