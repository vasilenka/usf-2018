import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from '../Text/Text.js';

const Navbar = ({ className, ...restProps }) => {
  return (
    <header className={classnames(styles.root)}>
      <nav className={classnames(styles.container)}>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            USF 2018
          </Text>
        </a>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            About
          </Text>
        </a>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            Location
          </Text>
        </a>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            Archive
          </Text>
        </a>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            Organizers & Partners
          </Text>
        </a>
        <a href="http://meridian.id">
          <Text className={styles.menu} label>
            Contact Us
          </Text>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
