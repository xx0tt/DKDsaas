import request from '@/utils/request'

// 获取运营工单
export const getTaskListApi = (params) => {
  return request({
    url: '/api/task-service/task/search',
    params
  })
}

// 获取工单详情
export const getTaskInfoApi = (id) => {
  return request({
    url: '/api/task-service/task/taskInfo/' + id
  })
}

// 获取捕获详情
export const getreplenishApi = (id) => {
  return request({
    url: '/api/task-service/taskDetails/' + id
  })
}

// 获取补货预警值
export const getsupplyAlertApi = () => {
  return request({
    url: '/api/task-service/task/supplyAlertValue'
  })
}

// 设置补货预警值
export const setsupplyAlertApi = (num) => {
  return request({
    url: '/api/task-service/task/autoSupplyConfig',
    method: 'POST',
    data: { alertValue: num }
  })
}
