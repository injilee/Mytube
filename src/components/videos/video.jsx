import React, { Component } from 'react';

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
      <li className="content-items">
        <img
          className="thumbnail"
          src={snippet.thumbnails.high.url}
          alt="video thumbnail"
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
      </li>
    );
  }
}
