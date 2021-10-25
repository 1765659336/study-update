import axios from "axios";
import { get } from "./storage";

// create an axios instance
const request = axios.create({
  // baseURL: import.meta.env['VITE_APP_BASE_API'] as string, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // baseURL: config.basePath,
  timeout: 5000 // request timeout
});
// request interceptor
request.interceptors.request.use(
  (config:any) => {
    config.headers["Authorization"] = get("token");
    // c.url=c.url + "?apiName=CuxQiadHdQuery"
    config.url = config.url;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
request.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      /* const { code } = response.data;
      if (code === 4003) {

      } else if (code === 4000) {

      } */
      return response;
    } else {
      return Promise.reject("网络请求错误");
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default request;
