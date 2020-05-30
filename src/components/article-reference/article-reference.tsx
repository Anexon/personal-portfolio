import React from "react";
import "./article-reference.scss";
import { Text } from "../../containers/Language";
import PropTypes from "prop-types";

function ArticleReference() {
  return (
    <div className="post-card">
      <div
        className="post-photo"
        style={{ backgroundImage: "url('/resources/medium_2.gif')" }}
      ></div>
      <div className="post-body">
        <h1>
          <a href="https://medium.com/puntotech/gr%C3%A1fico-de-red-con-d3-js-en-canvas-fe39632efcba">
            Gráfico de Red con D3.js en Canvas
          </a>
        </h1>
        <p>
          Stencil permite crear un entorno de trabajo modular, exportable y
          accesible por los principales frameworks de desarrollo web. Esto es
          una gran ventaja para unir elementos visuales de varios proyectos y
          estandarizar su uso, reciclar código, html, css, etc..
        </p>
        <small>
          <a href="https://medium.com/@benru">Rubén Triviño</a> en{" "}
          <a href="https://medium.com/puntotech">PuntoTech</a>
        </small>
        <small>Mayo 5, 2020 - 8 min read</small>
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
    articleReadTime: PropTypes.string,
  }).isRequired,
};

export default ArticleReference;
