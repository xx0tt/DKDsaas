import { getTaskInfoApi, getTaskListApi } from '@/api'

export default {
  namespaced: true,

  state: {
    taskList: [],
    TaskInfo: {},
    pageIndex: '',
    pageSize: '10',
    totalCount: '',
    totalPage: ''
  },

  mutations: {
    updateTaskList(state, payload) {
      state.taskList = payload.currentPageRecords
      state.pageIndex = payload.pageIndex
      state.totalCount = payload.totalCount
      state.totalPage = payload.totalPage
    },

    updateTaskInfo(state, payload) {
      state.TaskInfo = payload
    }
  },

  actions: {
    // 获取运营工单
    async getTaskList(context) {
      const data = await getTaskListApi()
      context.commit('updateTaskList', data)
    },
    // 获取工单详情
    async getTaskInfo(context, id) {
      const data = await getTaskInfoApi(id)
      context.commit('updateTaskInfo', data)
    }
  }
}
