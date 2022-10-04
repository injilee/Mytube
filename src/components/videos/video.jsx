import React, { Component } from 'react';
import styles from './video.module.css';

export default class Video extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id={}&key=${this.apiKey}`;

  videoList = (items) => {
    this.props.videoItem(items);
  };

  render() {
    const snippet = this.props.videoItem.snippet;
    const uploadDate = this.props.videoItem.snippet.publishedAt;
    return (
      <li className={styles.contentItems}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.itemDetails}>
          <img
            className={styles.channel}
            src="images/dreamcoding-thumbnail.jpg"
            alt={`${snippet.channelTitle} channel`}
          />
          <div className={styles.contentDetail}>
            <p className={styles.videoTitle}>{snippet.title}</p>
            <span className={styles.channerName}>{snippet.channelTitle}</span>
            <span className={styles.metaData}>
              조회수 15만회 • {uploadDate.replace('T', ' ').substring(0, 16)}
            </span>
          </div>
        </div>
      </li>
    );
  }
}
