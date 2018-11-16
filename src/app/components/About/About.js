import styles from './About.module.scss';
import React from 'react';
// import classnames from 'classnames';

import logo from './img/about-title.png';

import Text from '../Text/Text';
import Section from '../Section/Section';
import Button from '../Button/Button';

const About = ({ className, ...restProps }) => {
  return (
    <Section id="About" bleed className={styles.container}>
      <Section narrow className={styles.narrowContainer}>
        <div className={styles.root}>
          <Text className={styles.title} heading3 component="h3">
            Join us in imagining, creating, and affirming
          </Text>
          <img
            className={styles.logo}
            src={logo}
            alt="Another city is possible!"
          />
          <Button
            handleClick="https://bit.ly/informasiusf6"
            className={styles.cta}
            secondary
            large
          >
            View Schedule and Information Booklet
          </Button>
          <Text className={styles.paragraph} normal component="p">
            Greetings from the Organizing Committee of the 5<sup>th</sup> Urban
            Social Forum! Year after year the Urban Social Forum grows, in doing
            so it expands the conversation about better cities to include more
            and more people, communities, and ideas. The Forum believes in the
            need to urgently advocate for and promote a more socially just,
            sustainable and democratic city, and that active citizen
            participation is needed to achieve these goals. We would like to
            invite you and your organisation to play an active role in this
            year’s Forum.
          </Text>
          <Text className={styles.paragraph} normal component="p">
            There will be different ways you can participate, but ultimately you
            will have the opportunity to raise the awareness of, and connect
            with, people from across Indonesia about the issue that you care
            about, and promote new perspectives, ideas, and innovations.
          </Text>
        </div>
      </Section>
    </Section>
  );
};

export default About;
