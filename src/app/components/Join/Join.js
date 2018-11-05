import styles from './Join.module.scss';
import React from 'react';
// import classnames from 'classnames';

import artwork from './img/about.png';

import Section from '../Section/Section';
import Button from '../Button/Button';
import Text from '../Text/Text';

const Join = ({ className, ...restProps }) => {
  return (
    <Section bleed className={styles.container}>
      <Section narrow className={styles.componentContainer}>
        <div className={styles.root}>
          <a
            className={styles.button_group}
            href="http://bit.ly/usf6solo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button secondary large>
              Join this Event as a{' '}
              <Text component="h4" heading4>
                Participant
              </Text>
            </Button>
          </a>
          <a
            className={styles.button_group}
            href="http://bit.ly/formulirusf6jarakjauh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button secondary large>
              Join this Event as an{' '}
              <Text component="h4" heading4>
                Remote Participant
              </Text>
            </Button>
          </a>
        </div>
      </Section>
      {/* <img className={styles.artwork} src={artwork} alt="People with disability"/> */}
    </Section>
  );
};

export default Join;
