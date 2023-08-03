import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  };

  async Videos() {
    return axios.get('/videos/popular.json');
  };
}