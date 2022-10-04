import React, { Component } from 'react';
import Video from '../videos/video';
import styles from './videoList.module.css';

export default class VideoList extends Component {
  videoItem = (items) => {
    this.props.videoItem(items);
  };

  render() {
    return (
      <section className={styles.videoList}>
        <ul className={styles.videoContent}>
          {this.props.videoItem.map((items) => (
            <Video key={items.id} videoItem={items}></Video>
          ))}
        </ul>
      </section>
    );
  }
}
