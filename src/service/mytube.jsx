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
    return result.items.map((item) => ({
      ...item,
      description: item.snippet.description,
    }));
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    // return result.items;
    return result.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async LoadVideoId(item, promises) {
    for (let i = 0; i < item.length; i++) {
      promises.push(
        fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item[i].snippet.channelId}&key=${this.key}`,
          this.requestOptions,
        )
          .then((response) => response.json())
          .then((json) => json['items'][0].snippet.thumbnails.default.url)
          .then((url) => {
            item[i].channels = url;
          }),
      );
    }
    return item;
  }
}

export default Mytube;
