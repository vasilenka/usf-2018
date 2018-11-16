import styles from './FifthRow.module.scss';
import React from 'react';
import classnames from 'classnames';

import gula from './kembang-gula.png';
import kampung from './kampung-halaman.png';

const FifthRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={gula}
          className={classnames(styles.logo, styles.gula)}
          alt="Kembang gula logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={kampung}
          className={classnames(styles.logo, styles.kampung)}
          alt="Kampung halaman logo"
        />
      </div>
    </div>
  );
};

export default FifthRow;
