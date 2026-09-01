// 配置axios全局
import axios from "axios";

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    // 修正拼写错误：Authorization
    'Authorization': localStorage.getItem('token') || '',
  }
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response?.data;
  console.log('响应拦截器响应数据:', res);

  // 若后端统一返回 { code, msg/message, data }
  if (res && typeof res === 'object' && 'code' in res) {
    const code = (res as any).code;
    const message = (res as any).message ?? (res as any).msg;
    if (code !== 200) {
      console.error('响应拦截器错误:', message);
      return Promise.reject(new Error(message || 'Error'));
    }
    // 返回统一响应对象，调用方可解构 { data }
    return res;
  }

  // 若后端直接返回业务数据（无 code/msg 包装）
  return res;
}, function (error) {
  // 防御性处理：error.response 可能不存在（比如主动 new Error 抛出）
  const msg = error?.response?.data?.message ?? error?.response?.data?.msg ?? error?.message ?? 'Request error';
  console.error('响应拦截器错误:', msg);
  return Promise.reject(error instanceof Error ? error : new Error(msg));
});

export default instance;
