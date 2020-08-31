import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 263,
    backgroundColor: "white",
    "&.dark-mode": {
      backgroundColor: theme.palette.neutral.darkBlue,
      color: "white",
    },
  },
  fallbackImg: {
    width: 263,
    height: 160,
    backgroundColor: "gray",
    position: "absolute",
    top: 0,
  },
  media: {
    width: "100%",
  },
  content: {
    padding: [24, 24, 40, 24],
  },
  name: {
    marginBottom: 16,
  },
  info: {
    fontSize: ".875rem",
    fontWeight: 600,
    marginBottom: 4,
    "& span": {
      fontWeight: 400,
    },
  },
}));

function CardCountry({
  className,
  image,
  name,
  population,
  region,
  capital,
  colorScheme,
}) {
  const styles = useStyles();
  const [loaded, setLoaded] = useState(false);
  return (
    <Card
      className={clsx(
        styles.root,
        className,
        colorScheme == "dark" ? "dark-mode" : null
      )}
      elevation={4}
    >
      <img
        className={styles.media}
        src={image}
        alt="Flag"
        onLoad={() => setLoaded(true)}
      />
      {loaded ? null : <div className={styles.fallbackImg}></div>}

      <CardContent className={styles.content}>
        <Typography className={styles.name} variant="h2" component="h2">
          {name}
        </Typography>
        <Typography className={styles.info}>
          Population: <span>{population}</span>
        </Typography>
        <Typography className={styles.info}>
          Region: <span>{region}</span>
        </Typography>
        <Typography className={styles.info}>
          Capital: <span>{capital}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

function mapState(state) {
  return {
    colorScheme: state.colorScheme,
  };
}
export default connect(mapState)(CardCountry);
