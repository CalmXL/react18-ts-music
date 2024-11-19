import axios, { AxiosInstance } from 'axios'

class Request {
  instance: AxiosInstance

  constructor(config: any) {
    this.instance = axios.create({
      baseURL: 'xxsx',
      timeout: 10000,
      headers
    })
  }
}

export default Request
