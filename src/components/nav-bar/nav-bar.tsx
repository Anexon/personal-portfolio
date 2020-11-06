import React, { Fragment } from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Text } from "../../containers/Language";

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
          <span><a href="https://www.linkedin.com/in/tjuarezruben/" target="_blank">Contactar</a></span>
        </div>
      </nav>
    </Fragment>
  );
}
export default NavBar;
