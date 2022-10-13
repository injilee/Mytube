import React from 'react';
import styles from './videoInfo.module.css';

const VideoInfo = ({ videoDetail, videoDetail: { snippet } }) => {
  return (
    <>
      <article className={styles.viewDetail}>
        <div className={styles.viewDetail_wrap}>
          <iframe
            className={styles.player}
            width="100%"
            height="300px"
            title="YoutubePlayer"
            src={`https://www.youtube-nocookie.com/embed/${videoDetail.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.info}>
          <h1 className={styles.videoInfo_title}>{snippet.title}</h1>
          <span className={styles.view_count}>조회수 15만회</span>
          <span className={styles.upload}>
            {snippet.publishedAt.replace('T', ' ').substring(0, 16)}
          </span>
          <span className={styles.videoInfo_hashtag}>
            {snippet.tags.map((items) => `${items} `)}
          </span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.itemDetails}>
          <div className={styles.contentDetail}>
            <img
              className={styles.channel}
              src="images/dreamcoding-thumbnail.jpg"
              alt={`${snippet.channelTitle} channel`}
            />
            <div className={styles.meta}>
              <p className={styles.channerName}>{snippet.channelTitle}</p>
              <span className={styles.owner}>구독자 42만명</span>
            </div>
          </div>
          {/* <div className={styles.btn}>
            <button className={styles.subscribe}>구독</button>
          </div> */}
        </div>
      </article>
      <article>
        <span className={styles.line}></span>
      </article>
    </>
  );
};

export default VideoInfo;
