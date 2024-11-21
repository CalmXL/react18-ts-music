export const BASE_URL = 'http://123.207.32.32:9002/'
export const TIME_OUT = 8000

// 1. webpack 获取当前依赖当前环境 development/production
// let BASE_URL = ''
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://123.207.32.32:9002/'
// } else {
//   BASE_URL = 'http://123.207.32.32:9002/'
// }

// 2. 配置 .env.development/production 文件
console.log(process.env.REACT_APP_BASE_URL)

// export { BASE_URL }
