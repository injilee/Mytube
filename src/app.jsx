import React, { useEffect, useState } from 'react';
import './app.css';
import NavBar from './components/nav/navBar';
import VideoList from './components/video_list/videoList';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, getVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${apiKey}`;
    fetch(searchUrl, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId })),
      )
      .then((items) => getVideos(items))
      .catch((error) => console.log('error', error));
  };

  // 첫 화면에 보여지는 동영상 목록이기 때문에 mount 되자마자 받아옴.
  const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${apiKey}`;

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(videoUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => getVideos(result.items))
      .catch((error) => console.log('error', error));
  }, [videoUrl]);

  return (
    <>
      <NavBar onSearch={search}></NavBar>
      <VideoList videoItem={videos}></VideoList>
    </>
  );
};

export default App;
