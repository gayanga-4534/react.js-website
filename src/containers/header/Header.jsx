import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import gayanga from '../../assets/gayanga.jpg';
import gayanga2 from '../../assets/gayanga2.png';
import progaming from '../../assets/progaming.jpg';
import progaming1 from '../../assets/progaming1.png';
import './header.css';
import {Img} from 'react-image';

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
    <Img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.1876411061.1641381432" />
    </div>
  </div>
);

export default Header;
