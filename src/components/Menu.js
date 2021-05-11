import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Menu() {
  return (
    <div>
      <nav>
        <ul className="d-flex p-2 bd-highlight justify-content-around list-unstyled">
          <li>
            <Link to="/">
              <Button variant="outlined" color="primary">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mycities">
              <Button variant="outlined" color="primary">
                My Cities
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mynotes">
              <Button variant="outlined" color="primary">
                My Notes
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
