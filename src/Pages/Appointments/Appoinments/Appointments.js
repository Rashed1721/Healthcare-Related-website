import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Appointment from "../Appointment/Appointment";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
}));

const Appointments = () => {
  const classes = useStyles();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Grid container sx={{ my: "100px" }} className={classes.card}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" color="primary">
            Our Specialist Doctors
          </Typography>
          <Typography variant="h6" color="primary">
            We Have The Best Doctors Who are The Best in Our Country
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
            {doctors.map((doctor) => (
              <Appointment key={doctor.id} doctor={doctor}></Appointment>
            ))}
          </Grid>

          <Grid item xs={false} md={1}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Appointments;
