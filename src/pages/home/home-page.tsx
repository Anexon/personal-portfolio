import React from "react";
import "./home-page.scss";
import KnowledgeAreas from "../../components/knowledge-areas/knowledge-areas";
import { Text } from "../../containers/Language";

const HomePage = () => {
  return (
    <div className="page">
      <div className="summary-section">
        <div className="personal-summary">
          <div className="summary-positioning">
            <h1>
              <Text tid="summary"></Text>
            </h1>
            <p>
              <Text tid="summaryDescription1"></Text>
              <br />
              <br />
              <Text tid="summaryDescription2"></Text>
              <br />
              <br />
              <span>
                <Text tid="entrepeneurHastag"></Text>
              </span>
              <span>
                <Text tid="adventurerHastag"></Text>
              </span>
              <span>
                <Text tid="curiosHastag"></Text>
              </span>
              <span>
                <Text tid="creativeHastag"></Text>
              </span>
            </p>
            <div className="separator"></div>
            <br />
            <div className="social-media-icons">
              <a
                href="https://www.linkedin.com/in/tjuarezruben/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="" src="resources/linkedin.png" />
              </a>
              <a
                href="https://medium.com/@benru"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="" src="resources/medium.svg" />
              </a>
              <a
                href="https://twitter.com/benRuTJ"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="" src="resources/twitter.png" />
              </a>
              <a
                href="https://github.com/Anexon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="" src="resources/github.png" />
              </a>
              <br></br>
              <small>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  {" "}
                  www.flaticon.com
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="header-background"></div>
      </div>
      <KnowledgeAreas />
    </div>
  );
};

export default HomePage;
