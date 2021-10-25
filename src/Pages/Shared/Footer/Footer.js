import Copyright from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// custom css
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "300px",
    backgroundColor: "#455a64",
    color: "white",
    position: "relative",
    bottom: "0px",
    left: "0px",
    right: "0px",
    marginBottom: "0px",
  },
  bottomFooter: {
    backgroundColor: "#37474f",

    color: "white",
  },
  // footerCopyright: {},
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container flexDirection={"column"} color="primary">
      <Grid item container flexDirection={"column"} className={classes.footer}>
        {/* top footer area  */}
        <Grid item container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3">Bd National Health Center</Typography>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
        {/* middle foter area  */}
        <Grid item container spacing={4}>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Contact</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Treatments</Typography>
            <Typography>Doctors</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography>Medicine Corners</Typography>
            <Typography>Free Checkup</Typography>
            <Typography>Feedback</Typography>
          </Grid>

          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </Grid>
      {/* bottom footer area  */}
      <Grid container className={classes.bottomFooter}>
        <Grid item container sx={{ m: 3 }}>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Button>
              <FacebookIcon></FacebookIcon>
            </Button>
            <Button>
              <InstagramIcon></InstagramIcon>
            </Button>
            <Button>
              <LinkedInIcon></LinkedInIcon>
            </Button>
            <Button>
              <GitHubIcon></GitHubIcon>
            </Button>
          </Grid>

          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={3}></Grid>
        </Grid>

        {/* third footer  */}

        <Grid container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Copyright />- BDNHC 2021
            </div>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
