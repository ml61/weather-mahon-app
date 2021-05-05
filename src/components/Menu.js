import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Button variant="contained" color="primary">
                {" "}
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mycities">
              <Button variant="contained" color="primary">
                {" "}
                My Cities
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mynotes">
              <Button variant="contained" color="primary">
                {" "}
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
