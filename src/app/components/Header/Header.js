import styles from './Header.module.scss';
import React from 'react';
import classnames from 'classnames';

import cover from './img/header.png';
import logo from './img/logo.png';

import Section from '../Section/Section';
import Text from '../Text/Text';
import Button from '../Button/Button';

const Header = ({ className, ...restProps }) => {
  return (
    <Section full>
      <div className={classnames(styles.card)}>
        <img
          className={classnames(styles.cover)}
          src={cover}
          alt="Urban social forum (usf) 2018 cover"
        />
        <div className={classnames(styles.text)}>
          <img
            className={classnames(styles.logo)}
            src={logo}
            alt="The 6th Urban Social Forum logo"
          />
          <div className={classnames(styles.subtitle)}>
            <Text
              className={classnames(styles.subtitle_text)}
              heading3
              component="h2"
            >
              December 15 -16, 2018
            </Text>
            <Text
              className={classnames(styles.subtitle_text)}
              heading3
              component="h2"
            >
              Solo, Indonesia
            </Text>
          </div>
          <Text className={classnames(styles.description)} normal component="p">
            The Urban Social Forum is an annual event that provides an open and
            inclusive space for exchanging of knowledge, debating ideas, and
            networking between civil society organisations, activists,
            academics, and students working on pressing urban issues.
            Ultimately, the Forum is a truly public and democratic space for
            people to put forward alternative ideas and imagine ‘Another City is
            Possible!’
          </Text>
          <Text className={classnames(styles.description)} normal component="p">
            We invite you to be a part of the movement.
          </Text>
          <a
            href="http://bit.ly/usf6solo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button primary_full large>
              Join as a Participant
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Header;
