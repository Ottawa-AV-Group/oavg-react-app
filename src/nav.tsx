import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Grid } from "@material-ui/core";
import React from "react";

import LoginButton from "./login/loginButton";

export default function Nav() {
  return (
    <React.Fragment>
      <AppBar position="static" color="transparent">
        <Grid container justify="space-between">
          <Grid item>
            <Toolbar>
              <Link className="nav-link" to="/">
                <Button classes={{ label: "navbar-brand" }}>OAVG</Button>
              </Link>
              <Link className="nav-link" to="/about">
                <Button classes={{ label: "navbar-link" }}>About</Button>
              </Link>
              <Link className="nav-link" to="/contact">
                <Button classes={{ label: "navbar-link" }}>Contact</Button>
              </Link>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <LoginButton />
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
