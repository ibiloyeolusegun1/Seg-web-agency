// import React from 'react';
import React, {useState} from 'react';
import "./Header.css";
import {BiMenuAltRight, BiSearch} from 'react-icons/bi';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
     <section className="h-wrapper">
      <div className="h-container  center-flex padding inner-w">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="center-flex h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <a href="#" className='link'>Home</a>
          <a href="hero" className='link'>About</a>
          <a href="about" className='link'>Services</a>
          <a href="portfolio" className='link'>Portfolio</a>
          <a href="testi" className='link'>Testimonials</a>
          <a href="blog" className='link'>News</a>
          <a href="contact" className='link'>Contact</a>
          <a href="#" className='link'>Elements</a>
          <button className='search-btn'>
            <BiSearch/>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={35}/>
        </div>
      </div>
     </section>
  )
}

export default Header
