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

// 获取新碟上架
export function getNewAlbum(limit = 10) {
  return request.get({
    url: '/album/newest',
    params: {
      limit
    }
  })
}
