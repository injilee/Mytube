import React from 'react';
// import RelatedVideos from './relatedVideos';
import VideoInfo from './videoInfo';
import styles from './viewDetail.module.css';

const ViewDetail = ({ video }) => {
  return (
    <>
      <VideoInfo videoDetail={video} />
      {/* <RelatedVideos></RelatedVideos> */}
    </>
  );
};

export default ViewDetail;
