import React from "react";

import Nav from "./nav";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import Router from "./routes";
import { UserProvider } from "./login/user";
export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#3355dd",
          },
          secondary: {
            main: "#dddd44",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <React.Fragment>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <Router />
        </ThemeProvider>
      </UserProvider>
    </React.Fragment>
  );
}
