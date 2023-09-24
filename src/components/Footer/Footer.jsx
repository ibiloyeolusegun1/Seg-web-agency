import React from 'react';
import "./Footer.css";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container padding inner-w">
            <div className="footer-content">
                <img src="./logo.png" alt="" width={120}/>
                <p className='Txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore rerum itaque ratione veritatis odio ipsam eveniet cum?</p>
                <div className="brand">
                    <h3>Website development</h3>
                    <h3>Branding</h3>
                    <h3>UI/UX Design</h3>
                    <h3>Software</h3>
                    <h3>Digital marketing</h3>
                </div>
                <div className="icon">
                    <BiLogoFacebook/>
                    <BiLogoTwitter/>
                    <BiLogoInstagram/>
                </div>
                <p>Copywrite &copy; 2023 OG-Tech Digital. All right resevered.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
