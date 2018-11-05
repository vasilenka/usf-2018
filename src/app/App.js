import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Join from './components/Join/Join';
import Location from './components/Location/Location';
import Archive from './components/Archive/Archive';
import Sponsors from './components/Sponsors/Sponsors';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Navbar />
        <Header />
        <About />
        <Join />
        <Location />
        <Archive />
        <div className={styles.epic}>
          <div className={styles.gitar} />
          <div className={styles.drum} />
          <Sponsors />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
