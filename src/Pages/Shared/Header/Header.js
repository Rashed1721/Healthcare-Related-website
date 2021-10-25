import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// custom css
const useStyles = makeStyles(() => ({
  headerOption: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },

  navbarButton: {
    width: "200px",
  },
}));

const Header = () => {
  const { user, logOut } = useAuth();
  const classes = useStyles();
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container sx={{ py: "10px" }}>
              {/* Appbar Name and logo  */}
              <Grid item xs={12} md={2}>
                <Typography variant="h4">
                  <DashboardIcon />
                  BDNHC
                </Typography>
              </Grid>

              {/* appbar routing area  */}
              <Grid item xs={12} md={8}>
                <Link to="/home" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/services" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Services
                  </Button>
                </Link>
                <Link to="/events" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Events
                  </Button>
                </Link>
                <Link to="/appointment" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Appointment
                  </Button>
                </Link>
                <Link to="/register" className={classes.link}>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    className={classes.navbarButton}
                  >
                    Register
                  </Button>
                </Link>
              </Grid>

              {/* appbar login area  */}
              <Grid item xs={12} md={2}>
                {/* show user name dynamicly  */}
                <Typography>{user?.email}</Typography>
                {/* login button and logout  */}
                {user?.email ? (
                  <Button onClick={logOut} variant="contained" sx={{ mx: 2 }}>
                    <LogoutIcon></LogoutIcon>
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="contained" sx={{ mx: 2 }}>
                      <LoginIcon></LoginIcon>
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Header;
