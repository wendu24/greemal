import request from '@/utils/request'

export function listGoods(query) {
    return request({
      url: '/manage/goods/list',
      method: 'post',
      data: query
    })
}


// 新增订单
export function addGoods(data) {
    return request({
      url: '/manage/goods/add',
      method: 'post',
      data: data
    })
}
  