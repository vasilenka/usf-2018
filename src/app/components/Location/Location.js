import styles from './Location.module.scss';
import React from 'react';
import classnames from 'classnames';

import Map from '../Map/Map';

import Text from '../Text/Text';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import Venue from '../Venue/Venue';

const Location = ({ className, ...restProps }) => {
  return (
    <Section id="Location" full className={classnames(styles.root, 'Location')}>
      <SectionHeader
        narrow
        icon="map-marker-alt"
        title="Location"
        subtitle="The forum will be held in several locations in Solo city."
      />

      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <div className={styles.card}>
            <Text className={styles.title} heading4 component="h3">
              Main Venues
            </Text>
            <Venue
              name="Lokananta Records"
              address="Perum Percetakan Negara RI Cabang Solo Jl. Ahmad Yani No. 379A"
              url="https://goo.gl/maps/m7jLrWyYotC2"
            />
            <Venue
              name="Rumah Banjarsari"
              url="https://goo.gl/maps/YdA28SnoKYT2"
              address="Jl. Syamsurizal No.10, Setabelan, Banjarsari, Kota Surakarta"
              // url="https://goo.gl/maps/A5bgs6WKzGk"
            />
          </div>
        </div>

        <Map isMarkerShown />
      </div>
      <div className={styles.addressPhone}>
        <div className={styles.card}>
          <Venue
            name="Lokananta Records"
            address="Perum Percetakan Negara RI Cabang Solo Jl. Ahmad Yani No. 379A"
            url="https://goo.gl/maps/m7jLrWyYotC2"
          />
          <Venue
            name="Rumah Banjarsari"
            url="https://goo.gl/maps/YdA28SnoKYT2"
            address="Jl. Syamsurizal No.10, Setabelan, Banjarsari, Kota Surakarta"
            // url="https://goo.gl/maps/A5bgs6WKzGk"
          />
        </div>
      </div>
    </Section>
  );
};

export default Location;
