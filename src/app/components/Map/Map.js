import styles from './Map.module.scss';
import React from 'react';
import classnames from 'classnames';
import { compose, withProps } from 'recompose';
import { withScriptjs, GoogleMap, withGoogleMap } from 'react-google-maps';
const {
  MarkerWithLabel
} = require('react-google-maps/lib/components/addons/MarkerWithLabel');

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
)(({ isMarkerShown, className, ...restProps }) => {
  const marks = [
    {
      label: 'Lokananta Records',
      address: 'Perum Percetakan Negara RI Cabang Solo Jl. Ahmad Yani No. 379A',
      position: {
        lat: -7.5577743,
        lng: 110.7933346
      }
    },
    {
      label: 'Rumah Banjarsari',
      address: 'Jl. Syamsurizal No.10, Setabelan, Banjarsari, Kota Surakarta',
      position: {
        lat: -7.5595999,
        lng: 110.8256934
      }
    }
  ];

  return (
    <GoogleMap
      defaultZoom={14}
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
      {marks.map((mark, index) => {
        return (
          <MarkerWithLabel
            key={index}
            position={mark.position}
            labelAnchor={mark.position}
            labelStyle={{ position: 'relative' }}
          >
            <div
              style={{
                backgroundColor: 'yellow',
                color: '#174D59',
                fontSize: '16px',
                padding: '8px 12px',
                fontWeight: 500
              }}
            >
              {mark.label}
            </div>
          </MarkerWithLabel>
        );
      })}
    </GoogleMap>
  );
});

export default Map;
