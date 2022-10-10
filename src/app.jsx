import React, { useEffect, useState } from 'react';
import './app.css';
import NavBar from './components/nav/navBar';
import VideoList from './components/video_list/videoList';
import ViewDetail from './components/view/viewDetail';

const App = ({ youtube }) => {
  const [videos, getVideos] = useState([]);
  // const [view, getViews] = useState([]);

  const search = (query) => {
    youtube.search(query).then((items) => getVideos(items));
  };

  // 첫 화면에 보여지는 동영상 목록이기 때문에 mount 되자마자 받아옴.
  useEffect(() => {
    youtube.mostPopular().then((items) => getVideos(items));
  }, [youtube]);

  return (
    <>
      <NavBar onSearch={search}></NavBar>
      {/* <VideoList videoItem={videos}></VideoList> */}
      <ViewDetail onView={youtube}></ViewDetail>
    </>
  );
};

export default App;
