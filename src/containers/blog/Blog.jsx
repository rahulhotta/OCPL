import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="October 2022" text="Technology Trends to Step up Your Business. How OCPL will help you Getting V Growth in your business?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="October 2022" text="How Technology is changind Our Lives?" />
        <Article imgUrl={blog03} date="October 2022" text="Cyber Security Do's and Dont's for Enthusiasts." />
        <Article imgUrl={blog04} date="October 2022" text="How Analog Processing will be the future." />
        <Article imgUrl={blog05} date="October 2022" text="OCPL Trades  is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
