import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// custom css
const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  formMain: {
    margin: "100px",
  },
  formInput: {
    display: "block",
    marginTop: "30px",
    padding: "5px",
    borderRadius: "5px",
    width: "300px",
  },
  buttonText: {
    textDecoration: "none",
  },
}));

const Login = () => {
  const [error, setError] = useState("");

  // custom css classes
  const classes = useStyles();

  // google signin
  const { signInUsingGoogle } = useAuth();

  // is user login dirctly then after login sending user to home page

  const { register, handleSubmit } = useForm();

  // email password login
  const auth = getAuth();
  const onSubmit = (e) => {
    const { email, password } = e;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handeling google sign in
  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {});
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ my: "80px" }}
      className={classes.card}
    >
      <Grid item sx={{ my: "30px" }}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formMain}>
          <Typography variant="h3" color="primary" sx={{ my: "30px" }}>
            Login
          </Typography>
          <Grid item xs={12}>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <Typography variant="h4" color="primary" sx={{ my: "30px" }}>
                Give Valid Information
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            {" "}
            <TextField
              variant="outlined"
              label="Email"
              required
              {...register("email", { required: true })}
              className={classes.formInput}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              variant="filled"
              label="Password"
              {...register("password", { required: true })}
              className={classes.formInput}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Button type="submit" className={classes.formInput}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Link to="/register" className={classes.buttonText}>
              <Button
                variant="contained"
                sx={{ mx: "2" }}
                className={classes.navbarButton}
              >
                Dont Have An Account ?
              </Button>
            </Link>
            <Button onClick={handleGoogleLogIn} variant="contained">
              Sign in with Google ?
            </Button>
          </Grid>

          <br />
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
