import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Grid } from "@material-ui/core";
import React from "react";

import { UserStateContext } from "./login/user";

import LoginButton from "./login/loginButton";
import LogoutButton from "./login/logoutButton";

export default function Nav() {
  const { user } = React.useContext(UserStateContext);

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
            <Toolbar>{user ? <LogoutButton /> : <LoginButton />}</Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
