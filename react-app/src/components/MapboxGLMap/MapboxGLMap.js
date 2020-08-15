import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  width: "100%",
  height: "30rem",
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/writecody/ckdtn6jq80cu919pe9j9zfnd4',
        center: [7,51],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />

};

export default MapboxGLMap;