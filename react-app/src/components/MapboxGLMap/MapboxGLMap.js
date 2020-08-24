import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  height: "30rem",
  margin: '1rem auto 2rem',
  objectFit: 'cover',
  width: "100%",
};

const markerInfo = {
  lngLatData: [10, 51],
  markerText: 'ExampleText1'
}

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
        zoom: 4.5
      });

      const markerBorussiaDortmund = new mapboxgl.Marker()
        .setLngLat([7.463520, 51.511028])
        .setPopup(new mapboxgl.Popup({ offset: 5 }) 
        .setHTML('Borussia Dortmund'))
        .addTo(map);
      
      const markerFCBayernMunchen = new mapboxgl.Marker()
      .setLngLat([11.621480, 48.211830])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('FC Bayern Munich'))
      .addTo(map);

      const markerFCSchalke04 = new mapboxgl.Marker()
      .setLngLat([7.065640, 51.555260])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('FC Schalke 04'))
      .addTo(map);

      const markerHamburgerSV = new mapboxgl.Marker()
      .setLngLat([9.8996013, 53.5871004])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Hamburger SV'))
      .addTo(map);

      const markerFCAugsburg = new mapboxgl.Marker()
      .setLngLat([10.8854504, 48.323019])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('FC Augsburg'))
      .addTo(map);
  
      const markerFortunaDusseldorf = new mapboxgl.Marker()
      .setLngLat([6.7324382, 51.261241])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Fortuna Dusseldorf'))
      .addTo(map);

      const markerEintrachtFrankfurt = new mapboxgl.Marker()
      .setLngLat([8.6454819, 50.0685807])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Eintracht Frankfurt'))
      .addTo(map);

      const markerSCFreiburg = new mapboxgl.Marker()
      .setLngLat([7.821818800000001, 48.0196377])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('SC Freiburg'))
      .addTo(map);

      const markerHannover96 = new mapboxgl.Marker()
      .setLngLat([9.7301381, 52.3600874])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Hannover 96'))
      .addTo(map);
 
      const markerHerthaBSC = new mapboxgl.Marker()
      .setLngLat([13.2395208, 52.5153057])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Hertha BSC'))
      .addTo(map);

      const markerTSGHoffenheim1899 = new mapboxgl.Marker()
      .setLngLat([8.8879956, 49.238017])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('TSG Hoffenheim 1899'))
      .addTo(map);

      const marker1FCKoln = new mapboxgl.Marker()
      .setLngLat([6.875106799999999, 50.9334993])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('1. FC Koln'))
      .addTo(map);

      const markerBayer04Leverkusen = new mapboxgl.Marker()
      .setLngLat([7.00326, 51.03836])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Bayer 04 Leverkusen'))
      .addTo(map);

      const marker1FSVMainz05 = new mapboxgl.Marker()
      .setLngLat([8.2266145, 49.9843731])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('1. FSV Mainz 05'))
      .addTo(map);
 
      const markerBorussiaMoenchengladbach = new mapboxgl.Marker()
      .setLngLat([6.3845939, 51.1740177])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('Borussia Moenchengladbach'))
      .addTo(map);

      const marker1FCNurnberg = new mapboxgl.Marker()
      .setLngLat([11.12482, 49.42607])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('1. FC Nurnberg'))
      .addTo(map);
 
      const markerSCPaderborn07 = new mapboxgl.Marker()
      .setLngLat([8.711237299999999, 51.7301715])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('SC Paderborn 07'))
      .addTo(map);

      const markerRBLeipzig = new mapboxgl.Marker()
      .setLngLat([12.3495247, 51.3456602])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('RB Leipzig'))
      .addTo(map);

      const marker1FCUnionBerlin = new mapboxgl.Marker()
      .setLngLat([13.5676735, 52.4570058])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('1. FC Union Berlin'))
      .addTo(map);
 
      const markerSVWerderBremen = new mapboxgl.Marker()
      .setLngLat([8.83902, 53.0661689])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('SV Werder Bremen'))
      .addTo(map);

      const markerVfLWolfsburg = new mapboxgl.Marker()
      .setLngLat([10.8031899, 52.43269859999999])
      .setPopup(new mapboxgl.Popup({ offset: 5 }) 
      .setHTML('VfL Wolfsburg'))
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