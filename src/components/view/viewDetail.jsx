import React from 'react';
import { memo } from 'react';
import VideoInfo from './videoInfo';

const ViewDetail = memo(({ video }) => {
  return (
    <>
      <VideoInfo videoDetail={video} />
    </>
  );
});

export default ViewDetail;
