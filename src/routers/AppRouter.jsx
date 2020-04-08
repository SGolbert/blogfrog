import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogList from "../components/BlogList";
import About from "../components/About";
import NavBar from "../components/NavBar";
import LeftNav from "../components/LeftNav";
import BlogCreator from "../components/BlogCreator";
import BlogContext from "../context/blog-context";

import appRouterStyles from "./AppRouter.module.scss";

function AppRouter() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const initialBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(initialBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BrowserRouter>
      <BlogContext.Provider value={{ blogs, setBlogs }}>
        <NavBar />
        <div className={appRouterStyles.main}>
          <LeftNav />
          <Switch>
            <Route path="/" component={BlogList} exact={true} />
            <Route
              path="/content/:month"
              render={(props) => <BlogList {...props} />}
              exact={true}
            />
            <Route path="/create" component={BlogCreator} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BlogContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;
