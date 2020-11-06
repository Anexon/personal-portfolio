import React from "react";
import "./article-reference.scss";
import { Text } from "../../containers/Language";
import PropTypes from "prop-types";

function ArticleReference(props: any) {
  return (
    <div className="post-card" onClick={() => { window.open(props.articleData.articleUrl, '_blank') }}>
      <div
        className="post-photo"
        style={{
          backgroundImage: `url('${props.articleData.backgroundImage}')`,
        }}
      ></div>
      <div className="post-body">
        <h1>
          {props.articleData.title}
        </h1>
        <p>{props.articleData.description}</p>
        <small>
          <a href={props.articleData.profileUrl}>
            {props.articleData.profileName}
          </a>{" "}
          <Text tid="particulaEn"></Text>{" "}
          <a href={props.articleData.communityUrl}>
            {props.articleData.communityName}
          </a>
        </small>
        <small>{props.articleData.articleReadTimeText}</small>
      </div>
    </div>
  );
}

ArticleReference.propTypes = {
  articleData: PropTypes.shape({
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    articleUrl: PropTypes.string,
    profileUrl: PropTypes.string,
    profileName: PropTypes.string,
    communityUrl: PropTypes.string,
    communityName: PropTypes.string,
    articleReadTimeText: PropTypes.string,
  }).isRequired,
};

export default ArticleReference;
