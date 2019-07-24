import axios from 'axios'

export default axios.create({
  baseURL: 'https://store-e91f5.firebaseio.com/'
})