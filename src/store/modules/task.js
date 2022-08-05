import { getreplenishApi, getTaskInfoApi, getTaskListApi } from '@/api'

export default {
  namespaced: true,

  state: {
    taskList: [], // table 列表
    TaskInfo: {}, // 点击的详情信息
    replenishDetails: [], // 补货详情
    pageIndex: '',
    totalCount: '',
    totalPage: '',
    detailDialog: false, // 详情弹出层
    addDetailsDialog: false // 补货详情弹出层
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
    },
    updatedetailDialog(state, payload) {
      state.detailDialog = payload
    },
    updateaddDetailsDialog(state, payload) {
      state.addDetailsDialog = payload
    },
    updatereplenishDetails(state, payload) {
      state.replenishDetails = payload
    }
  },

  actions: {
    // 获取运营工单
    async getTaskList(context, payload) {
      const data = await getTaskListApi(payload)
      context.commit('updateTaskList', data)
    },
    // 获取工单详情
    async getTaskInfo(context, id) {
      context.commit('updatedetailDialog', true)
      const data = await getTaskInfoApi(id)
      context.commit('updateTaskInfo', data)
    },
    // 获取捕获详情
    async getreplenish(context) {
      context.commit('updateaddDetailsDialog', true)
      const data = await getreplenishApi(context.state.TaskInfo.taskId)
      context.commit('updatereplenishDetails', data)
    }
  }
}
