import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;
