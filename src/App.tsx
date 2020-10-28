import React, { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./pages/about/about-page";
import PortfolioPage from "./pages/portfolio/portfolio-page";
import HomePage from "./pages/home/home-page";
import NavBar from "./components/nav-bar/nav-bar";
import { GithubApi } from "./services/github-api";
import { LanguageProvider } from "./containers/Language";

function App() {

  const [isFirstShot, setIsFirstShot] = useState(true);

  useEffect(() => {
    const callback = function (entries: any) {
      entries.forEach((entry: any, index: number) => {
        if (entry.isIntersecting && !entry.target.classList.contains("is-visible")) {
          setTimeout(() => {
            entry.target.classList.toggle("is-visible");
          }, 400 * index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1
    });
    const targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function (target) {
      observer.observe(target);
    });
  })

  return (
    <LanguageProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage githubApi={GithubApi} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default App;
