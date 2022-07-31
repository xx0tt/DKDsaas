import axios from "axios";
// import { Message } from "element-ui";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // /likede/ ,
});

// request.interceptors.response.use(
//   (response) => {
//     if (response.data.success) return response.data;
//     if (response.data.type === "image/jpeg") return response.data;
//     Message.error(response.data.msg);
//     return Promise.reject(new Error(response.data.msg));
//   },
//   (error) => {
//     Message.error(error.message);
//     return Promise.reject(error);
//   }
// );

export default request;
