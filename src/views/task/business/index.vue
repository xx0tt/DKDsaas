<template>
  <div>
    <!-- 头部组件 -->
    <Header @query="queryFn" />

    <!-- 内容区域 -->
    <div class="Busin-main">
      <Dialog />

      <!-- 表单 -->
      <taskTable />

      <!-- 详情弹出层 -->
      <detailDialog :TaskInfo="TaskInfo" />

      <!-- 补货详情弹出层 -->
      <replenish />

      <!-- 底部分页区域 -->
      <taskFooter @pageUp="pageUp" @pageDown="pageDown" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Dialog from './components/Dialog.vue'
import detailDialog from './components/detailDialog.vue'
import taskTable from './components/taskTable.vue'
import taskFooter from './components/taskFooter.vue'
import replenish from './components/replenish.vue'
import { Loading } from 'element-ui'
import { mapState } from 'vuex'
export default {
  components: {
    Header,
    Dialog,
    detailDialog,
    taskTable,
    taskFooter,
    replenish
  },
  data() {
    return {
      queryterm: {
        pageIndex: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getTableData()
  },
  computed: {
    ...mapState('task', ['taskList', 'TaskInfo', 'totalPage'])
  },
  methods: {
    // 获取表单数据
    async getTableData() {
      const loadingInstance = Loading.service()
      await this.$store.dispatch('task/getTaskList', this.queryterm)
      loadingInstance.close()
    },

    // 头部查询按钮
    queryFn(payload) {
      this.queryterm = { ...this.queryterm, ...payload }
      this.getTableData()
    },

    // 上一页
    pageUp() {
      if (this.queryterm.pageIndex > 1) {
        this.queryterm.pageIndex--
        this.getTableData()
      }
    },
    // 下一页
    pageDown() {
      if (this.queryterm.pageIndex < this.totalPage) {
        this.queryterm.pageIndex++
        this.getTableData()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Busin-main {
  margin-top: 20px;
  background-color: #fff;
}
.el-card {
  border: unset;
}

::v-deep .el-dialog {
  border-radius: 10px;
}
::v-deep .el-dialog__title {
  font-size: 16px;
  color: #333;
  font-weight: 700;
}
</style>
