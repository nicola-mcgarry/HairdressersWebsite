import React from 'react';
import './Header.scss';
import headerItems from "../data/HeaderItems.json";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import { Link } from 'react-router-dom';

function Header() {
const {HeaderItems} = headerItems

  return (
    <div className="Header">
      <button>Book Now</button>
      <div className='MainHeader'>
        <h3 className='Title'>Smith & Hogen</h3>     
       <div className='HeaderLinks'>
       {HeaderItems.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
       </div>
       </div>
        <div className='SocialLinks'>
          <img src={facebook} alt="facebook"/>
          <img src={instagram} alt="instagram"/>
        </div>
     
      
    </div>
  );
}

export default Header;
