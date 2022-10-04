class Mytube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  getVideoItems() {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=8&key=${this.key}`;

    fetch(videoUrl, this.requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result.items))
      .catch((error) => console.log('error', error));
  }
}

export default Mytube;
