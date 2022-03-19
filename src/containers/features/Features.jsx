import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'NAME',
    text: 'H.Gayanga Sandaruwan',
  },
  {
    title: 'BIRTH DAY',
    text: '22-04-1998',
  },
  {
    title: 'HIGHER EDUCATION',
    text: 'Institute of Software Engineering',
  },
  {
    title: 'SCHOOL',
    text: 'Godapitiya Central Collage',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="about">
    {/* <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div> */}
      <div className="gpt3__blog-heading">
      <h1 className="gradient__text">ABOUT</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
