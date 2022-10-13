import React from 'react';
import RelatedVideos from './relatedVideos';
import VideoInfo from './videoInfo';
import styles from './viewDetail.module.css';

const ViewDetail = ({ video }) => {
  return (
    <section className={styles.viewDetail_container}>
      <VideoInfo videoDetail={video}></VideoInfo>
      <RelatedVideos></RelatedVideos>
    </section>
  );
};

export default ViewDetail;
