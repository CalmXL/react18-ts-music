import request from '@/service'

// 获取轮播
export function getBanners() {
  return request.get({
    url: '/banner'
  })
}

// 获取热门推荐
export function getHotRecommend() {
  return request.get({
    url: '/personalized'
  })
}
