import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://resort-recording.firebaseio.com/'
});
export default instance;