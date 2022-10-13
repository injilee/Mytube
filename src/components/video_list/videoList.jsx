import React, { Component } from 'react';
import Video from '../videos/video';
import styles from './videoList.module.css';

export default class VideoList extends Component {
  render() {
    const { videoItem, onVideoClick } = this.props;
    return (
      <section className={styles.videoList}>
        <ul className={styles.videoContent}>
          {videoItem.map((videos) => (
            <Video
              key={videos.id}
              videoItem={videos}
              onVideoClick={onVideoClick}
            ></Video>
          ))}
        </ul>
      </section>
    );
  }
}
