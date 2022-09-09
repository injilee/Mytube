import React, { Component } from 'react';
import Video from './video';

export default class VideoList extends Component {
  videoItem = (items) => {
    this.props.videoItem(items);
  };

  render() {
    return (
      <div className="video-container">
        {this.props.videoItem.map((items) => (
          <Video key={items.id} videoItem={items}></Video>
        ))}
      </div>
    );
  }
}
