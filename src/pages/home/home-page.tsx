import React from "react";
import "./home-page.scss";
import KnowledgeAreas from "../../components/knowledge-areas/knowledge-areas";
import ContactButton from "../../components/contact-button/ContactButton";
import { Text } from "../../containers/Language";

const HomePage = () => {
  return (
    <div className="page">
      <div className="summary-section">

        <div className="inner-space">
          <div className="personal-summary">
            <small> <Text tid="summaryTopText"></Text></small>
            <h1>
              <Text tid="summary"></Text>
            </h1>
            <p>
              <Text tid="summaryDescription1"></Text>
            </p>


            <ContactButton></ContactButton>
          </div>
          <div className="header-background"></div>
        </div>
      </div>
      <KnowledgeAreas />
    </div>
  );
};

export default HomePage;
