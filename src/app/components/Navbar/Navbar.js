import styles from './Navbar.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.png';
import { ReactComponent as Bar } from './bar.svg';
import { ReactComponent as Close } from './close.svg';

import Text from '../Text/Text.js';

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      overlay: false
    };
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  closeOverlay = e => {
    this.overlay.style.display = 'none';
    this.setState({
      ...this.state,
      overlay: false
    });
  };

  openOverlay = () => {
    this.overlay.style.display = 'flex';
    this.setState({
      ...this.state,
      overlay: true
    });
  };

  render() {
    // let {className} = this.props;
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
        <nav className={classnames(styles.smallerContainer)}>
          <div className={styles.menuSmaller}>
            <Text className={styles.smallMenuText}>USF 2018</Text>
            <Bar onClick={this.openOverlay} />
          </div>
          <div
            ref={node => (this.overlay = node)}
            className={styles.menuContainer}
          >
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src={logo}
                alt="Urban Social Forum 2018"
              />
            </div>
            <div className={styles.menus}>
              <a
                onClick={() => this.closeOverlay()}
                href="#Header"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  USF 2018
                </Text>
              </a>
              <a
                onClick={() => this.closeOverlay()}
                href="#About"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  About
                </Text>
              </a>
              <a
                onClick={() => this.closeOverlay()}
                href="#Location"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  Location
                </Text>
              </a>
              <a
                onClick={() => this.closeOverlay()}
                href="#Archive"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  Archive
                </Text>
              </a>
              <a
                onClick={() => this.closeOverlay()}
                href="#Partners"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  Organizers & Partners
                </Text>
              </a>
              <a
                onClick={() => this.closeOverlay()}
                href="#Contact"
                className={styles.menu}
              >
                <Text className={styles.menuText} label>
                  Contact Us
                </Text>
              </a>
            </div>
            <div className={styles.buttonContainer}>
              <Close
                className={styles.closeButton}
                onClick={() => this.closeOverlay()}
              />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
