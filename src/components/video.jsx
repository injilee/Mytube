import React, { Component } from 'react';

export default class Video extends Component {
  videoList = (items) => {
    this.props.videoItem(items);
  };

  render() {
    const snippet = this.props.videoItem.snippet;
    const uploadDate = this.props.videoItem.snippet.publishedAt;
    return (
      <section className="video-content">
        <div className="content-items">
          <img
            className="thumbnail"
            src={`${snippet.thumbnails.high.url}`}
            alt="video thumbnail images"
          />
          <div className="item-details">
            <img
              className="channel"
              src="images/dreamcoding-thumbnail.jpg"
              alt={`${snippet.channelTitle} channel`}
            />
            <div className="content-detail">
              <p className="video-title">{snippet.title}</p>
              <span className="channer-name">{snippet.channelTitle}</span>
              <span className="meta-data">
                조회수 15만회 • {uploadDate.replace('T', ' ').substring(0, 16)}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
