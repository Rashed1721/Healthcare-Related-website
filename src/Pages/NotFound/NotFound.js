import { Grid, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Grid container sx={{ my: "100px" }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" color="primary">
          Page Not Found
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://image.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865136.jpg"
          alt=""
          srcset=""
        />
      </Grid>
    </Grid>
  );
};

export default NotFound;
