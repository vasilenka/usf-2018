import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from '../Text/Text.js';

const Navbar = ({ className, ...restProps }) => {
  return (
    <header className={classnames(styles.root)}>
      <nav className={classnames(styles.container)}>
        <a href="#Header" className={styles.menu}>
          <Text className={styles.menuText} label>
            USF 2018
          </Text>
        </a>
        <a href="#About" className={styles.menu}>
          <Text className={styles.menuText} label>
            About
          </Text>
        </a>
        <a href="#Location" className={styles.menu}>
          <Text className={styles.menuText} label>
            Location
          </Text>
        </a>
        <a href="#Archive" className={styles.menu}>
          <Text className={styles.menuText} label>
            Archive
          </Text>
        </a>
        <a href="#Partners" className={styles.menu}>
          <Text className={styles.menuText} label>
            Organizers & Partners
          </Text>
        </a>
        <a href="#Contact" className={styles.menu}>
          <Text className={styles.menuText} label>
            Contact Us
          </Text>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
