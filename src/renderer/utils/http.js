/*
 * @Author: your name
 * @Date: 2021-02-23 15:28:48
 * @LastEditTime: 2021-02-23 15:38:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-mongodb-test\http\http.js
 */
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3000/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 90000 // request timeout
})

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// request interceptor
service.interceptors.request.use(
  (config) => config,
  (error) =>
    // do something with request error
    Promise.reject(error)
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    console.log(res)
    if (res.code === 401) {
      localStorage.clear()
      window.location.href = '/'
    } else if (res.code === 502) {
      this.$message.error(res.msg)
    }
    return res
  },
  (error) => {
    console.log(`err${error}`) // for debug
    return Promise.reject(error)
  }
)

export default service
