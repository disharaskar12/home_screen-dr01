import React from "react";
import "./navigationbar.css";
import logo from "../images/Logo_Infobytes_01-removebg-preview.png";

const NavigationBar = ({ activeTab, onTabClick }) => {
  return (
    <nav class="navbar">
   
   <div>
          <div className="logo-section">
            <a href="/" className="brand">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="brand-text">
            <div className="brand-heading">INFOBYTES TECHNOSYS</div>
            <p className="tagline">We Believe in Transparency!</p>
          </div>
        </div>

   
    
    <div class="menu">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#" onClick={() => onTabClick('home')} className={activeTab === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => onTabClick('company')} className={activeTab === 'company' ? 'active' : ''}>Company</a>
          </li>
          <li>
            <a href="#" onClick={() => onTabClick('paytrakz')} className={activeTab === 'paytrakz' ? 'active' : ''}>Paytrakz</a>
          </li>
          {/* <li>
            <a href="#" onClick={() => onTabClick('aboutus')} className={activeTab === 'aboutus' ? 'active' : ''}>aboutus</a>
          </li> */}
         
        </ul>
      </div>
      
      {/* <div className="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/company">Company</a></li>

        <li><a href="/paytrakz">Paytrakz</a></li>

        {/* <li><a href="/aboutus">Aboutus</a></li>  */}
        {/* </ul> 
      </div>
       */}
   
    </nav>
  );
};

export default NavigationBar;