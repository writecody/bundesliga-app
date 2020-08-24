import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  height: "30rem",
  margin: '1rem auto 2rem',
  objectFit: 'cover',
  width: "100%",
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
        center: [10.4234469, 51.0834196],
        zoom: 4.75
      });

      const marker1 = new mapboxgl.Marker()
        .setLngLat([10, 51])
        .addTo(map);

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