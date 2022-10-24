import React from 'react';
import { memo } from 'react';
import styles from './videoInfo.module.css';

const VideoInfo = memo(({ videoDetail, videoDetail: { snippet } }) => {
  const count = videoDetail.viewCount;
  const subscriberCount = videoDetail.subscriberCount;

  const parser = new DOMParser();
  const title = snippet.title;
  let finalResult = parser.parseFromString(title, 'text/html');

  return (
    <>
      <article className={styles.viewDetail}>
        <div className={styles.viewDetail_wrap}>
          <iframe
            className={styles.player}
            width="100%"
            height="100%"
            title="YoutubePlayer"
            src={`https://www.youtube-nocookie.com/embed/${videoDetail.id}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.info}>
          <h1 className={styles.videoInfo_title}>
            {finalResult.body.textContent}
          </h1>
          <span className={styles.view_count}>
            {count === null
              ? ''
              : count !== null
              ? count >= 10000 &&
                '조회수 ' + Math.floor(count * 0.0001) + '만회 • '
              : count <= 1000 &&
                '조회수 ' + Math.floor(count * 0.001) + '천회 • '}
          </span>
          <span className={styles.upload}>
            {snippet.publishedAt.replace('T', ' ').substring(0, 16)}
          </span>
          <span className={styles.videoInfo_hashtag}>
            {snippet.tags ? snippet.tags.map((items) => `${items} `) : ''}
          </span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.itemDetails}>
          <div className={styles.contentDetail}>
            <img
              className={styles.channel}
              src={`${videoDetail.channels}`}
              alt={`${videoDetail.channelTitle} channel`}
            />
            <div className={styles.meta}>
              <p className={styles.channerName}>{snippet.channelTitle}</p>
              <span className={styles.owner}>
                구독자{' '}
                {subscriberCount
                  ? subscriberCount >= 10000 &&
                    Math.floor(subscriberCount * 0.0001) + '만명 '
                  : subscriberCount <= 1000 &&
                    Math.floor(subscriberCount * 0.001) + '천명 '}
              </span>
            </div>
          </div>
          <div className={styles.more}>
            <span className={styles.description}>
              {videoDetail.snippet.description}
            </span>
            <button className={styles.more_btn}>더보기</button>
          </div>
        </div>
      </article>
      <article>
        <span className={styles.line}></span>
      </article>
    </>
  );
});

export default VideoInfo;
