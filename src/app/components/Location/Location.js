import styles from './Location.module.scss';
import React from 'react';
// import classnames from 'classnames';

import Map from '../Map/Map';

import Button from '../Button/Button';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import Text from '../Text/Text';

const Location = ({ className, ...restProps }) => {
  return (
    <Section full className={styles.root}>
      <SectionHeader
        narrow
        icon="map-marker-alt"
        title="Location"
        subtitle="The forum will be held in several locations in Solo city."
      />
      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <div className={styles.card}>
            <Text className={styles.venue__name} heading3 component="h3">
              Muara Market
            </Text>
            <Text className={styles.venue__address} normal component="p">
              Jl. Lumban Tobing, Setabelan, Banjarsari, Kota Surakarta
            </Text>
            <Text className={styles.venue__name} heading3 component="h3">
              Rumah Banjarsari
            </Text>
            <Text className={styles.venue__address} normal component="p">
              Jl. Syamsurizal No.10, Setabelan, Banjarsari, Kota Surakarta
            </Text>
            <a
              className={styles.venue__link}
              href="https://goo.gl/maps/A5bgs6WKzGk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button tertiary small>
                Get Direction
              </Button>
            </a>
          </div>
        </div>
        <Map isMarkerShown />
      </div>
    </Section>
  );
};

export default Location;
