import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    textDecoration: "none",
  },
}));

const Appointment = ({ doctor }) => {
  const { id, name, degree, picture, fees, email } = doctor;

  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} sx={{ m: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={picture}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={name}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Degree : {degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fees : {fees}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardButton}>
          {/* dynamic routing for every service  */}
          <Link to={`/service/${id}`} className={classes.buttonText}>
            <Button variant="contained">
              Details About {name.toLowerCase()}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Appointment;
