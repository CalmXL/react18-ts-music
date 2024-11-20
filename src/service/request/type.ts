import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
  CreateAxiosDefaults
} from 'axios'

export interface CreateRequestConfig extends CreateAxiosDefaults {
  interceptors?: Interceptors
}

export interface Interceptors<T = AxiosResponse> {
  requestSuccessFn: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailureFn: (err: any) => any
  responseSuccessFn: (res: T) => T
  responseFailureFn: (err: any) => any
}

export interface RequestConfig<T> extends AxiosRequestConfig {
  interceptors?: Interceptors<T>
}
