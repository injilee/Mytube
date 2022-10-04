import React, { useEffect, useState } from 'react';
import './app.css';
import NavBar from './components/nav/navBar';
import VideoList from './components/video_list/videoList';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=8&key=${apiKey}`;
  const [videos, getVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(videoUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => getVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <VideoList videoItem={videos}></VideoList>
    </>
  );
};

export default App;
