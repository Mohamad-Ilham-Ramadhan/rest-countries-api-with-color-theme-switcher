import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import locationIcon from "../images/icon-location.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 535,
    zIndex: 50,
    marginBottom: 42,
  },
}));

const markerIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [46, 56],
});

export default function Mapsdf({ className, location }) {
  const styles = useStyles();
  return (
    <Map
      className={styles.root}
      center={location}
      zoom={6}
      // zoomControl={false}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        maxZoom={18}
        id="mapbox/streets-v11"
        tileSize={512}
        zoomOffset={-1}
        accessToken="pk.eyJ1IjoibS1pbGhhbS1yIiwiYSI6ImNrZ2FheXhiczA1ZGYyc3FjbW1yNWY4NG8ifQ.YH_QmdJYa7Xp807y7CpV2w"
      />
      <Marker icon={markerIcon} position={location}></Marker>
    </Map>
  );
}
