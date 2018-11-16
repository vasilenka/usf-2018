import styles from './Sponsors.module.scss';
import React from 'react';
// import classnames from 'classnames';

import Text from '../Text/Text';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';

import FirstRow from './FirstRow/FirstRow';
import SecondRow from './SecondRow/SecondRow';
import ThirdRow from './ThirdRow/ThirdRow';
import FourthRow from './FourthRow/FourthRow';
import FifthRow from './FifthRow/FifthRow';
import MediaPartners from './MediaPartners/MediaPartners';

const Sponsors = ({ className }) => {
  return (
    <Section id="Partners" className={styles.bleed}>
      <Section narrow className={styles.root}>
        <SectionHeader bleed icon="star" title="Organizer & Partners" />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <FifthRow />
        <div className={styles.row}>
          <Text
            style={{
              textAlign: 'center',
              width: '100%'
            }}
            large
          >
            Media partners
          </Text>
        </div>
        <MediaPartners />
      </Section>
    </Section>
  );
};

export default Sponsors;
