import styles from './ArchiveItem.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

const ArchiveItem = ({ title, url, img, alt, className, ...restProps }) => {
  return (
    <a
      className={styles.root}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classnames(styles.tiles)}>
        <img className={styles.thumbnail} src={img} alt={alt} />
      </div>
      <Text className={styles.band} large component="h3">
        {title}
      </Text>
    </a>
  );
};

export default ArchiveItem;
