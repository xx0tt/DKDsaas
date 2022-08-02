import axios from 'axios'
// import { Message } from "element-ui";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // /likede/ ,
})

request.interceptors.response.use((res) => {
  return res.data
})

export default request
