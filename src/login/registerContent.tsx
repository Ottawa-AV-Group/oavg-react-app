import {
  Button,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";

import { UserDispatchContext } from "./user";

import firebase from "firebase/app";
import "firebase/auth";
import { Formik } from "formik";

interface Props {
  extraContent?: JSX.Element;
  closeCallback?: Function;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default function RegisterContent(props: Props) {
  const classes = useStyles();
  const setUser = React.useContext(UserDispatchContext);

  return (
    <React.Fragment>
      <DialogTitle>Register a new account</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validate={(values) => {
            const errors: {
              email?: string;
              password?: string;
              confirmPassword?: string;
            } = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords must match";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            firebase
              .auth()
              .createUserWithEmailAndPassword(values.email, values.password)
              .then((userCredential) => {
                // Signed in
                setUser && setUser({ nextUser: userCredential.user });
                setSubmitting(false);
                props.closeCallback && props.closeCallback();
                // ...
              })
              .catch((error) => {
                alert(`${error.code}\n${error.message}`);
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              className={classes.root}
              onSubmit={handleSubmit}
              autoComplete={"off"}
              noValidate
            >
              <TextField
                fullWidth
                color="primary"
                variant="outlined"
                id="email"
                type="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                color="primary"
                variant="outlined"
                id="password"
                type="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
              />
              <TextField
                fullWidth
                color="primary"
                variant="outlined"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
        {props.extraContent}
      </DialogContent>
    </React.Fragment>
  );
}
