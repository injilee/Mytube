import React from 'react';
import VideoInfo from './videoInfo';

const ViewDetail = ({ video }) => {
  return (
    <>
      <VideoInfo videoDetail={video} />
    </>
  );
};

export default ViewDetail;
