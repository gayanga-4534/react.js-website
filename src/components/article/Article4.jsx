import React from 'react';
import './article.css';
import { Button } from '@material-ui/core';
const Article4 = ({ imgUrl, date, text }) => (
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
      <Button color="primary" variant="contained" href="https://Python-env.eba-hcs2u6yz.us-east-1.elasticbeanstalk.com" >
        VIEW
      </Button>
    </div>
  </div>
);

export default Article4;
