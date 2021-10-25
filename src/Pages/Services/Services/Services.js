import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Grid container sx={{ my: "100px" }} className={classes.card}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4" color="primary">
          Our Treatments
        </Typography>
        <Typography variant="h6" color="primary">
          We Have The Best Doctors And Equipments to Treat Your All Kind of
          Diseases
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={4}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-around"
          sx={{ my: "40px" }}
        >
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>

        <Grid item xs={false} md={1}></Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
