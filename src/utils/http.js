// 对 axios 的封装
import axios from 'axios'

// create 方法相对于是 new 一个 axios 的实例对象
const http = axios.create()

// 配置 http 的一些的配置选项
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://182.254.200.217:3000' : 'http://localhost:3000'
// 请求的最大等待时间
http.defaults.timeout = 10000

// 请求拦截
// http.interceptors.request = () => {

// }

// 响应拦截
http.interceptors.response.use((response) => {
  console.log(response)
  // 这里我直接将 reponse.data 给返回出去了。然后组件中，使用 封装好的 http.js 做请求的话，他们的返回结果中，就不需要在 .data 了。
  return response.data
}, (error) => {
  console.log(error)
})

export default http
