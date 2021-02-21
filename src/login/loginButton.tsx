import { Button, Dialog, Typography } from "@material-ui/core";
import React, { useState } from "react";

import RegisterContent from "./registerContent";
import LoginContent from "./loginContent";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"Login" | "Register">("Login");

  const content =
    mode === "Login" ? (
      <LoginContent
        closeCallback={() => setOpen(false)}
        extraContent={
          <Typography variant="body1">
            Don't have an account?{" "}
            <Button onClick={() => setMode("Register")}>Register</Button>
          </Typography>
        }
      />
    ) : (
      <RegisterContent
        closeCallback={() => setOpen(false)}
        extraContent={
          <Typography variant="body1">
            Already have an account?{" "}
            <Button onClick={() => setMode("Login")}>Login</Button>
          </Typography>
        }
      />
    );

  return (
    <React.Fragment>
      <Button classes={{ label: "navbar-link" }} onClick={() => setOpen(true)}>
        Login
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        {content}
      </Dialog>
    </React.Fragment>
  );
}
