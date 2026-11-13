import axios from 'axios'
import { showLoading, hideLoading } from 'vant'

const service = axios.create({
  baseURL: 'http://localhost:3001',   // 与本组 json-server 端口一致
  timeout: 5000
})

// 请求拦截：开加载提示
service.interceptors.request.use(
  (config) => {
    showLoading()
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截：关提示、直接交出 res.data
service.interceptors.response.use(
  (res) => {
    hideLoading()
    return res.data
  },
  (err) => {
    hideLoading()
    alert('请求失败：' + err.message + '（请确认 json-server 已启动）')
    return Promise.reject(err)
  }
)

export default service