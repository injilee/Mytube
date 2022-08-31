import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <>
        <section className="video-content">
          <img
            src="images/dreamcoding-thumbnail.jpg"
            alt="dreamcoding thumbnail"
          />
          <p>자바스크립트 11. 비동기 처리의 시작 콜백 이해하...</p>
          <span>드림코딩</span>
          <span>조회수 15만회 • 2년 전</span>
        </section>
        <section className="video-content">
          <img
            src="images/honeybeefather-thumbnail.jpg"
            alt="honeybeefather thumbnail"
          />
          <p>올해 첫 장수말벌 편대에 벌통 3통 작살(feat.두선생)</p>
          <span>프응TV</span>
          <span>조회수 444만회 • 1년 전</span>
        </section>
        <section className="video-content">
          <img src="images/haejoo-thumbnail.jpg" alt="haejoo thumbnail" />
          <p>[VLOG] 브이로그</p>
          <span>해쭈</span>
          <span>조회수 106만회 • 2년 전</span>
        </section>
      </>
    );
  }
}
