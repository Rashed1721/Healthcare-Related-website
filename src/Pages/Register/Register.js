import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

// main component function
const Register = () => {
  const classes = useStyles();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();
  const auth = getAuth();

  // data submit area
  const onSubmit = (e) => {
    const { email, password } = e;

    if (password.length < 6) {
      setError("Password Must be at least 6 character long ");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain Two Upper Case ");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
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
            Register
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
            <TextField
              variant="outlined"
              label="Email"
              required
              type="email"
              {...register("email", { required: true })}
              className={classes.formInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Password"
              {...register("password", { required: true })}
              className={classes.formInput}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" className={classes.formInput}>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to="/login" className={classes.buttonText}>
              <Button
                variant="contained"
                sx={{ mx: 2 }}
                className={classes.navbarButton}
              >
                Al Ready Have An Account ?
              </Button>
            </Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Register;
