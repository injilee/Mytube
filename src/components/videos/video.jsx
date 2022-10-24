import React, { PureComponent } from 'react';
import styles from './video.module.css';

export default class Video extends PureComponent {
  render() {
    const {
      videoItem,
      videoItem: { snippet },
      onVideoClick,
    } = this.props;

    const count = videoItem.viewCount;

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
              {count === null
                ? ''
                : count !== null
                ? count >= 10000 &&
                  '조회수 ' + Math.floor(count * 0.0001) + '만회 • '
                : count <= 1000 &&
                  '조회수 ' + Math.floor(count * 0.001) + '천회 • '}
              {snippet.publishedAt.replace('T', ' ').substring(0, 16)}
            </span>
          </div>
        </div>
      </li>
    );
  }
}
