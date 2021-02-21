import { Button, Dialog } from "@material-ui/core";
import React, { useState } from "react";

import { UserDispatchContext } from "./user";

import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button classes={{ label: "navbar-link" }} onClick={() => setOpen(true)}>
        Login
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}></Dialog>
    </React.Fragment>
  );
}
