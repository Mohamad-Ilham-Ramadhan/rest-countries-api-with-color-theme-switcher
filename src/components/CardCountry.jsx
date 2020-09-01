import React, { useState } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Actions
import getCountryDetail from "../actions/getCountryDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 263,
    backgroundColor: "white",
    textDecoration: "none",
    "& .MuiPaper-root": {
      height: "100%",
      "&:hover": {
        cursor: "pointer",
        boxShadow:
          "0px 7px 9px 1px rgba(0,0,0,0.06), 0px 14px 21px 2px rgba(0,0,0,0.03), 0px 5px 26px 4px rgba(0,0,0,0.02)",
      },
    },
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
  countries,
  getCountryDetail,
}) {
  const styles = useStyles();
  const [loaded, setLoaded] = useState(false);
  return (
    <Link
      to={`/detail/${name}`}
      className={clsx(
        styles.root,
        className,
        colorScheme == "dark" ? "dark-mode" : null
      )}
      onClick={() => getCountryDetail(name, countries)}
    >
      <Card elevation={4}>
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
    </Link>
  );
}

function mapState(state) {
  return {
    colorScheme: state.colorScheme,
    countries: state.countries,
  };
}
function mapDispatch(dispatch) {
  return {
    getCountryDetail: (name, countries) => {
      dispatch(getCountryDetail(name, countries));
    },
  };
}
export default connect(mapState, mapDispatch)(CardCountry);
