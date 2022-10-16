import React, { Component } from 'react';
import styles from './video.module.css';

export default class Video extends Component {
  render() {
    const {
      videoItem,
      videoItem: { snippet },
      onVideoClick,
    } = this.props;
    return (
      <li
        onClick={() => onVideoClick(videoItem)}
        className={styles.contentItems}
      >
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.itemDetails}>
          <img
            className={styles.channel}
            src={`${snippet.channels}`}
            alt={`${snippet.channelTitle} channel`}
          />
          <div className={styles.contentDetail}>
            <p className={styles.videoTitle}>{snippet.title}</p>
            <span className={styles.channerName}>{snippet.channelTitle}</span>
            <span className={styles.metaData}>
              조회수 15만회 •{' '}
              {snippet.publishedAt.replace('T', ' ').substring(0, 16)}
            </span>
          </div>
        </div>
      </li>
    );
  }
}
