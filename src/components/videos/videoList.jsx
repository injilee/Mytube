import React, { Component } from 'react';
import Video from './video';

export default class VideoList extends Component {
  videoItem = (items) => {
    this.props.videoItem(items);
  };

  render() {
    return (
      <section className="video-list">
        <ul className="video-content">
          {this.props.videoItem.map((items) => (
            <Video key={items.id} videoItem={items}></Video>
          ))}
        </ul>
      </section>
    );
  }
}
