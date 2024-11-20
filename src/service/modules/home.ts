import request from '../index'

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

request
  .request<IHomeData>({
    url: '/home/multidata',
    interceptors: {
      requestSuccessFn(config) {
        return config
      },
      requestFailureFn(err) {
        return err
      },
      responseSuccessFn: (config) => {
        return config
      },
      responseFailureFn(err) {
        return err
      }
    }
  })
  .then((res) => {
    console.log(res.data, res.returnCode, res.success)
  })
  .catch((err) => {
    console.log(err)
  })
