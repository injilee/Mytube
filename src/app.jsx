import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from './app.module.css';
import Loading from './components/loading';
import NavBar from './components/nav/navBar';
import VideoList from './components/video_list/videoList';
import ViewDetail from './components/view/viewDetail';

const App = ({ youtube }) => {
  const [videos, getVideos] = useState([]);
  const [video, selectView] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then((items) => {
      let promises = [];
      youtube.LoadVideoId(items, promises);
      Promise.all(promises).then(() => getVideos(items));
    });
  }, [youtube]);

  const selectVideo = useCallback((video) => {
    selectView(video);
  }, []);

  const search = useCallback(
    (query) => {
      selectVideo(null);
      setLoading(true);
      youtube.search(query).then((items) => {
        let promises = [];
        youtube.LoadVideoId(items, promises);
        Promise.all(promises).then(() => {
          getVideos(items);
          setLoading(false);
        });
      });
    },
    [selectVideo, youtube],
  );

  return (
    <>
      <NavBar onSearch={search} />
      {loading ? <Loading /> : ''}
      <section className={styles.content}>
        {video && (
          <div className={`${styles.viewDetail_container} ${styles.detail}`}>
            <ViewDetail video={video} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videoItem={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </>
  );
};

export default App;
