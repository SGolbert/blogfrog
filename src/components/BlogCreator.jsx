import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogContext from "../context/blog-context";
import {
  generateTitle,
  generateContent,
  generateDate,
} from "../utils/contentGenerator";

import blogCreatorStyles from "./BlogCreator.module.scss";

function BlogCreator(props) {
  const [number, setNumber] = useState(1);
  const [dateIni, setDateIni] = useState("2020-01-01");
  const [dateLast, setDateLast] = useState("2020-04-01");

  const { blogs, setBlogs } = useContext(BlogContext);

  const addPost = (e) => {
    e.preventDefault();
    let title,
      content,
      date,
      key,
      newBlogs = [];

    for (let i = 0; i < number; i++) {
      title = generateTitle();
      content = generateContent();
      date = generateDate(dateIni, dateLast);
      key = uuidv4();

      newBlogs.push({ title, content, date, key });
    }
    setBlogs([...newBlogs, ...blogs]);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    props.history.push("/");
  };

  return (
    <div className={blogCreatorStyles.blogCreatorContainer}>
      <h1>Blog Post Creator</h1>
      <form onSubmit={addPost}>
        <h3>Number of posts</h3>
        <input
          type="number"
          min="1"
          max="100"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h3>Dates</h3>
        <p>From</p>
        <input
          value={dateIni}
          onChange={(e) => {
            setDateIni(e.target.value);
            console.log(generateDate(dateIni, dateLast));
          }}
          type="date"
        />
        <p>to</p>
        <input
          value={dateLast}
          onChange={(e) => setDateLast(e.target.value)}
          type="date"
        />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BlogCreator;
