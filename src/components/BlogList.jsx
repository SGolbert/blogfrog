import React, { useContext } from "react";
import BlogEntry from "./BlogEntry";
import BlogContext from "../context/blog-context";

import blogListStyles from "./BlogList.module.scss";

export default (props) => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const monthString = props.match.params.month || "all";

  return (
    <div className={blogListStyles.blogListContainer}>
      <h1>Blog list:</h1>
      <ul className={blogListStyles.blogList}>
        {blogs.map((blog) => {
          const yearMonth = blog.date.slice(0, 4) + blog.date.slice(5, 7);
          if (yearMonth === monthString || monthString === "all") {
            return (
              <BlogEntry
                title={blog.title}
                content={blog.content}
                date={blog.date}
                keyString={blog.key}
              />
            );
          } else {
            return "";
          }
        })}
      </ul>
      <button onClick={() => setBlogs([])}>Clear blog list</button>
    </div>
  );
};
