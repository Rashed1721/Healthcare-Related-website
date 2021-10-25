import AddAlertIcon from "@mui/icons-material/AddAlert";
import ShareIcon from "@mui/icons-material/Share";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

// custom css
const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    height: "480px",
    width: "450px",
    marginTop: "100px",
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    textDecoration: "none",
  },
}));

const HomeServices = (props) => {
  // asign custom css in classes
  const classes = useStyles();
  // rating value state
  const [value, setValue] = React.useState(2);
  // destructuring the course
  const { id, serviceName, fees, picture } = props.course;
  return (
    <Grid item xs={12} md={4} sx={{ m: 2 }} justifyContent="center">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="300"
            image={picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="primary"
            >
              {serviceName}
            </Typography>
            <Typography>Total Patients :{fees}</Typography>
          </CardContent>
          <Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>
        </CardActionArea>

        {/* card butoon area  */}
        <CardActions className={classes.cardButton}>
          <Button color="primary" className={classes.cardButton}>
            <ShareIcon></ShareIcon>
          </Button>
          <Button color="primary" className={classes.cardButton}>
            <AddAlertIcon></AddAlertIcon>
          </Button>
          {/* dynamic routing for every service  */}
          <Link to={`/service/${id}`} className={classes.buttonStyle}>
            <Button variant="outlined">Details About {serviceName}</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HomeServices;
