import request from '@/utils/request'

export function listOrders(query) {
    return request({
      url: '/manage/order/list',
      method: 'post',
      data: query
    })
}


// 新增订单
export function addOrder(data) {
    return request({
      url: '/manage/order/add',
      method: 'post',
      data: data
    })
}
  