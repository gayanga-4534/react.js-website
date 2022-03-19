import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import gayanga from '../../assets/gayanga.jpg';
import gayanga2 from '../../assets/gayanga2.png';
import progaming from '../../assets/progaming.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hi,I am Gayanga Sandaruwa</h1>
      <p>I  AM  A  FULL  STACK  DEVELOPER</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={progaming} />
    </div>
  </div>
);

export default Header;
