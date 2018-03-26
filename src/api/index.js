/**
 * index
 * create by lqy 2018/3/26
 */

import axios from 'axios';
import config from './../config';

const instance = axios.create({
  baseURL: config.apiHopst,
});

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
