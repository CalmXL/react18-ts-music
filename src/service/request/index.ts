import axios, { AxiosInstance } from 'axios'
import { RequestConfig, CreateRequestConfig } from './type'

class Request {
  instance: AxiosInstance

  constructor(config: CreateRequestConfig) {
    this.instance = axios.create(config)

    // 每个 instance 都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截')
        return err
      }
    )

    // 针对特定的实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功的拦截')
        return res
      },
      (err) => {
        console.log('全局响应失败的拦截')
        return err
      }
    )
  }

  request<T = any>(config: RequestConfig) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config as any)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }

          resolve(res)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export default Request
