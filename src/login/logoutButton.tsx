import { Button } from "@material-ui/core";
import React from "react";
import { UserDispatchContext } from "./user";

export default function LogoutButton() {
  const setUser = React.useContext(UserDispatchContext);
  return (
    <Button
      classes={{ label: "navbar-link" }}
      onClick={() => {
        setUser && setUser({ nextUser: null });
      }}
    >
      Logout
    </Button>
  );
}
