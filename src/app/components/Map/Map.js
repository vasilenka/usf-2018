import styles from './Map.module.scss';
import React from 'react';
import classnames from 'classnames';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  GoogleMap,
  withGoogleMap,
  Circle,
  Marker
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8S2NUCXzpL68-IXATK_4B5ZSMzQJ-HHs&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={classnames(styles.container)} />,
    mapElement: <div className={classnames(styles.map)} />
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, className }) => {
  const marks = [
    { lat: -7.561901, lng: 110.8253412 },
    { lat: -7.5595999, lng: 110.8256934 }
  ];

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: -7.560368, lng: 110.8279058 }}
      gestureHandling="greedy"
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      }}
    >
      {isMarkerShown &&
        marks.map((mark, index) => <Marker key={index} position={mark} />)}
    </GoogleMap>
  );
});

export default Map;
