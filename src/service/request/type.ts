import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
  CreateAxiosDefaults
} from 'axios'

export interface CreateRequestConfig extends CreateAxiosDefaults {
  interceptors?: Interceptors
}

export interface Interceptors {
  requestSuccessFn: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn: (err: any) => any
  responseSuccessFn: (res: AxiosResponse) => AxiosResponse
  responseFailureFn: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors
}
