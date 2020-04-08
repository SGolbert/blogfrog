import React from "react";

export default ({ title, content, date, keyString }) => {
  return (
    <li key={keyString}>
      <h2>
        {title} - {date}
      </h2>
      {content.split("\n").map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </li>
  );
};
