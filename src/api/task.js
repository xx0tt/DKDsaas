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
