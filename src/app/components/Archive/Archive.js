import styles from './Archive.module.scss';
import React from 'react';
import classnames from 'classnames';

import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import Text from '../Text/Text';

const Archive = ({ className, ...restProps }) => {
  return (
    <Section className={styles.bleed}>
      <Section narrow className={styles.root}>
        <SectionHeader bleed icon="archive" title="Archive" />
        <div className={styles.row}>
          <div className={styles.item}>
            <div className={classnames(styles.tiles, styles.report)}>
              <Text className={styles.band} large>
                Event Report
              </Text>
            </div>
          </div>
          <div className={styles.item}>
            <div className={classnames(styles.tiles, styles.gallery)}>
              <Text className={styles.band} large>
                Photo Gallery
              </Text>
            </div>
          </div>
          <div className={styles.item}>
            <div className={classnames(styles.tiles, styles.video)}>
              <Text className={styles.band} large>
                Video
              </Text>
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Archive;
