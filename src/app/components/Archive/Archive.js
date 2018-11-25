import styles from './Archive.module.scss';
import React from 'react';
// import classnames from 'classnames';

import Section from '../Section/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import ArchiveItem from '../ArchiveItem/ArchiveItem';

import report from './img/report.jpg';
import gallery from './img/gallery.jpg';
import video from './img/video.jpg';

const Archive = ({ className, ...restProps }) => {
  // const getWidth = document.querySelector('#gallery');
  // console.log(getWidth);

  return (
    <div id="Archive" className={styles.bleed}>
      <Section narrow className={styles.root}>
        <SectionHeader bleed icon="archive" title="Archive" />
        <div className={styles.row}>
          <ArchiveItem
            title="Event Report"
            img={report}
            alt="report thumbnail"
            url="http://bit.ly/eventreportusf"
          />

          <ArchiveItem
            title="Photo Gallery"
            img={gallery}
            alt="gallery thumbnail"
            url="https://issuu.com/urbansocialforum/docs/urban_social_forum_photo_gallery_lo_a0cab4fe997ddf"
          />

          <ArchiveItem
            title="Video"
            img={video}
            alt="video thumbnail"
            url="https://www.youtube.com/watch?v=B4H7BhTgv50"
          />
        </div>
      </Section>
    </div>
  );
};

export default Archive;
