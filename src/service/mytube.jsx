class Mytube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    const promises = [];
    result.items.map((item) => {
      promises.push(this.LoadVideoId(item.snippet.channelId, item));
    });

    return Promise.all(promises).then((values) => values);
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async LoadVideoId(channelId, item) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    item.snippet.channels = result.items[0].snippet.thumbnails.medium.url;

    return new Promise((resolve, reject) => {
      resolve(item);
    });
  }
}

export default Mytube;
