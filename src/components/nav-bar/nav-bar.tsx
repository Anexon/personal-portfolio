import React, { Fragment } from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Text } from "../../containers/Language";
import ContactButton from "../contact-button/ContactButton";

function NavBar() {
  const history = useHistory();

  return (
    <Fragment>
      <nav className="container">
        <a
          onClick={() => {
            history.push("/");
          }}
        >
          Rubén Triviño Juárez
        </a>
        <div className="sections">

          <Link to="/portfolio">
            <Text tid="navbarOption1"></Text>
          </Link>
          <span>Contactar</span>
        </div>
      </nav>
    </Fragment>
  );
}
export default NavBar;
