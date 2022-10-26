# Mytube

React Create App을 이용한 YouTube Clone 프로젝트 입니다.

## 1. 컴포넌트 설계

### 폴더 구조

<pre>
<code>
src/
  components/
     - [nav]
       - navBar
       - profile
       - searchForm
       
     - [video_list]
       - videoList
     - [videos]
       - video
       
     - [view]
       - videoInfo
       - videoDetail

  service/
    - [x] mytube
    
  app.jsx
  index.js
</code>
</pre>

### API 설계

| function      | url      | part                    | result         |
| ------------- | -------- | ----------------------- | -------------- |
| search()      | search   | snippet                 | 영상 검색      |
| mostPopular() | videos   | snippet&<br/>statistics | 인기 영상 목록 |
| channels      | channels | snippet&<br/>statistics | 특정 채널 정보 |

## 2. 구현기능

- [x] 다크모드 지원
- [x] 반응형 디자인
- [x] Loading spinner
- [x] 검색 기능
- [x] 인기 동영상 및 관련 동영상 목록
- [x] 유튜브 API
- [x] .env 파일로 API Key 암호화
- [ ] 연관검색어 자동 완성 (2022.11 구현 예정)
- [ ] Google OAuth2.0 인증 방식 (2022.11 구현 예정)

## 3. 문제

### 1. channel API에서 channel thumbnail 데이터 얻기

채널 썸네일을 얻기 위해서는 video api에서 각 영상의 channelId를 channel API 요청 시 uri에 함께 넘겨줘야 했다.

- 이전 코드

```javascript
** App component **

useEffect(() => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=4&key=${apiKey}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => getVideos(result.items));
}, []);
```

- 해결 코드
  - 네트워크를 처리하는 class 컴포넌트를 둬서 그 안에서 데이터를 처리.
  - for loop을 돌면서 모든 동영상 목록의 channelId를 전부 받음.
  - Promise.all 을 이용해 video에서 channelId를 받아 channel api를 호출.
  - 병렬적으로 처리한 후 채널 썸네일을 받아올 수 있었다.

```javascript
** App.jsx **

useEffect(() => {
  setLoading(true);
  youtube.mostPopular().then((items) => {
    let promises = [];
    youtube.LoadVideoId(items, promises);
    Promise.all(promises).then(() => getVideos(items));
  });
  setLoading(false);
}, [youtube]);
```

```javascript
** mytube.jsx **

 async LoadVideoId(item, promises) {
    for (let i = 0; i < item.length; i++) {
      promises.push(
        fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${item[i].snippet.channelId}&key=${this.key}`,
          this.requestOptions,
        )
          .then((response) => response.json())
          .then((json) => {
            item[i].channels = json['items'][0].snippet.thumbnails.default.url;

            item[i].subscriberCount =
              json['items'][0].statistics.subscriberCount;
          }),
      );
    }
    return item;
  }
```

[MDN 참고](https://developers.google.com/youtube/v3/docs/channels?hl=en)

### 2. Promise.all issue

```javascript
youtube.search().then((items) => {
  let promises = [];
  youtube.LoadVideoId(items, promises);
  Promise.all(promises).then(() => getVideos(items));
});
```

<code>let promises = []</code>에 fetch로 호출한 api를 Promise.all로 한 번에 받아온 다음 push 했더니 아래와 같은 에러가 발생했다. 배열이 아닌 값을 push 했기 때문이다.

```
"TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))"
```

Promise.all은 인수로 배열을 받기 때문에 <code>promises</code> 배열에 할당할 값이 배열이어야 한다.

[참고](https://stackoverflow.com/questions/64035514/promise-all-bringing-up-typeerror-undefined-is-not-iterable-cannot-read-prope)

## 4. Preview

- Desktop 🖥  
  <br/><img src="https://user-images.githubusercontent.com/90603357/197764714-f6148800-bc55-49f9-b66f-b12e107c8641.png" alt="desktop screenshot" style="width:100%;"/>

<br/>

- Mobile 📱  
  <br/><img src="https://user-images.githubusercontent.com/90603357/197793602-62e02f4e-203b-4b55-a1b4-599c1a9994d4.png" alt="mobile screenshot" style="width:30%;"/>

---

## 5. Demo Link

https://injilee-mytube.netlify.app/

<br/>

## Tech Stack

- [x] HTML
- [x] css
- [x] JavaScript
- [x] React
- [x] postCSS
- [x] Postman

## Reference

[Dream Coding](https://academy.dream-coding.com/)

## Tech Blog

[Mytube :: What I Learned](<[https](https://blog.naver.com/lij8016/222910631551)>)
