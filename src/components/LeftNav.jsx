import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../context/blog-context";
import leftNavStyles from "./LeftNav.module.scss";

function groupBlogs(blogs) {
  const dict = {};
  const sortedBlogs = blogs.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });
  for (let i = 0; i < sortedBlogs.length; i++) {
    const element = sortedBlogs[i];
    const yearMonth = element.date.slice(0, 4) + element.date.slice(5, 7);
    if (dict[yearMonth] === undefined) {
      dict[yearMonth] = { count: 1 };
    } else {
      dict[yearMonth].count += 1;
    }
  }

  const result = [];

  for (var key in dict) {
    result.push({
      month: key,
      count: dict[key].count,
    });
  }

  return result;
}

function LeftNav() {
  const { blogs } = useContext(BlogContext);

  const groupedBlogs = groupBlogs(blogs);

  return (
    <div className={leftNavStyles.sideBar}>
      <h3>Post per month</h3>
      <ul className={leftNavStyles.months}>
        {groupedBlogs.map((monthEntry) => {
          return (
            <li key={monthEntry.month}>
              <Link to={`/content/${monthEntry.month}`}>
                {monthEntry.month}: {monthEntry.count}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftNav;
