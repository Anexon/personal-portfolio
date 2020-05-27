import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./pages/about/about-page";
import PortfolioPage from "./pages/portfolio/portfolio-page";
import HomePage from "./pages/home/home-page";
import NavBar from "./components/nav-bar/nav-bar";
import { GithubApi } from "./services/github-api";
import { LanguageProvider } from "./containers/Language";

function App() {
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
