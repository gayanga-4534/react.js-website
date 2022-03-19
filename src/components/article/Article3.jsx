import React from 'react';
import './article.css';
import { Button } from '@material-ui/core';
const Article3 = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      {/* <p>Read Full Article</p> */}
      <Button color="primary" variant="contained" href="https://github.com/gayanga-4534/easy_car_rental.git" >
        VIEW3
      </Button>
    </div>
  </div>
);

export default Article3;
