import React, { PureComponent } from 'react';
import styles from './video.module.css';

export default class Video extends PureComponent {
  render() {
    const {
      videoItem,
      videoItem: { snippet },
      onVideoClick,
    } = this.props;

    const parser = new DOMParser();
    const title = snippet.title;
    let finalResult = parser.parseFromString(title, 'text/html');

    return (
      <li
        onClick={() => {
          onVideoClick(videoItem);
          window.scrollTo(0, 0);
        }}
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
            src={`${videoItem.channels}`}
            alt={`${videoItem.channelTitle} channel`}
          />
          <div className={styles.contentDetail}>
            <p className={styles.videoTitle}>{finalResult.body.textContent}</p>
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
