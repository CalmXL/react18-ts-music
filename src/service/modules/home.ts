import request from '../index'

request
  .request({
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
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
