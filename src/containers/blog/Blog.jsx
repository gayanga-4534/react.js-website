import React from 'react';
import Article from '../../components/article/Article';
import Article2 from '../../components/article/Article2';
import Article3 from '../../components/article/Article3';
import Article4 from '../../components/article/Article4';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { Button } from '@material-ui/core';
const Blog = () => (
  <div className="gpt3__blog section__padding" id="projects">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">PROJECTS</h1>
    </div>
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
       
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog05} date="React Native" text="Flights App" />
 
        <Article2 imgUrl={blog03} date="Spring" text="EASY CAR RENTAL SYSTEM" />
        <Article3 imgUrl={blog04} date="Sep 26, 2021" text="Flights App" />
        <Article4 imgUrl={blog02} date="Machine Learning" text="Car price predictor" />
        {/* <Button variant="outlined" color="error">Error</Button> */}
      </div>
    </div>
  </div>
);

export default Blog;
