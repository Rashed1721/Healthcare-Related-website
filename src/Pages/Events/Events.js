import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    marginTop: "60px",
  },
}));

const Events = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.card} sx={{ my: "100px" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3" color="primary">
          Upcoming Events
        </Typography>
        <Typography variant="h6" color="primary">
          We Celebrate All the World Health Related Days and Events
        </Typography>
      </Grid>

      {/* <Grid item xs={false} md={1}></Grid> */}
      <Grid
        item
        container
        xs={12}
        md={12}
        justifyContent="center"
        sx={{ mt: 10 }}
      >
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                ></Avatar>
              }
              title="World Health Day"
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="400px"
                image="https://image.freepik.com/free-vector/realistic-world-health-day-illustration_23-2148879721.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardButton}></CardActions>
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                ></Avatar>
              }
              title="World Tumor Day"
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="400px"
                image="https://image.freepik.com/free-photo/world-breast-cancer-day-concept-health-care-woman-wore-white-t-shirt-with-pink-ribbon-awareness-symbolic-bow-color-raising-people-living-with-women-s-breast-tumor-illness_231208-11863.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardButton}></CardActions>
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                ></Avatar>
              }
              title="World HIV Day"
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="400px"
                image="https://image.freepik.com/free-vector/set-banner-with-world-aids-day-ribbon_24877-58016.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardButton}></CardActions>

            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                  ></Avatar>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400px"
                  image="https://image.freepik.com/free-vector/realistic-world-health-day-illustration_23-2148879721.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButton}></CardActions>
            </Card>
          </Card>
        </Grid>
      </Grid>

      {/* <Grid item xs={false} md={1}></Grid> */}
    </Grid>
  );
};

export default Events;
