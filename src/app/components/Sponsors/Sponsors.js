import styles from './Sponsors.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';

import kk from './logo/kk.png';
import muaramarket from './logo/muara.png';
import banjarsari from './logo/rumahbanjarsari.png';

const Sponsors = ({ className }) => {
  return (
    <Section className={styles.bleed}>
      <Section narrow className={styles.root}>
        <SectionHeader bleed icon="star" title="Organizer & Partners" />
        <div className={styles.row}>
          <div className={styles.kk}>
            <img className={styles.kkLogo} src={kk} alt="logo kotakia" />
          </div>
          <div className={styles.secondaryOrganizer}>
            <div className={styles.muaramarketContainer}>
              <img
                className={styles.muaramarketLogo}
                src={muaramarket}
                alt="logo muara market"
              />
            </div>
            <div className={styles.banjarsariContainer}>
              <img
                className={styles.banjarsariLogo}
                src={banjarsari}
                alt="logo rumah banjarsari"
              />
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Sponsors;
