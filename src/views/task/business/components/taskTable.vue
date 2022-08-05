<template>
  <el-table
    :data="taskList"
    style="width: 100%"
    class="Busin-table"
    @cell-click="detail"
  >
    <el-table-column prop="date" label="序号" type="index" />
    <el-table-column prop="taskCode" label="工单号" />
    <el-table-column prop="innerCode" label="设备编号" />
    <el-table-column prop="taskType.typeName" label="工单类型" />

    <el-table-column prop="createType" label="工单方式" :formatter="taskType" />

    <el-table-column
      prop="taskStatus"
      label="工单状态"
      :formatter="taskStatus"
    />

    <el-table-column prop="userName" label="运营人员" />
    <el-table-column
      prop="updateTime"
      :formatter="dateFilter"
      label="创建日期"
      width="150px"
    />

    <el-table-column label="操作">
      <a href="javaScript:;" style="color: #4368e1" @click="isA = true">
        查看详情
      </a>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      isA: false
    }
  },
  computed: {
    ...mapState('task', ['taskList'])
  },
  methods: {
    dateFilter(a, b, c) {
      return dayjs(c).format('YYYY.MM.DD HH:mm:ss')
    },
    taskType(a, b, c) {
      return ['自动', '手动'][c]
    },
    taskStatus(a, b, c) {
      return ['待办', '进行', '取消', '完成'][c - 1]
    },
    // 查看详情
    async detail(row) {
      if (this.isA) {
        await this.$store.dispatch('task/getTaskInfo', row.taskId)
      }
      this.isA = false
    }
  }
}
</script>

<style lang="scss">
.Busin-table {
  padding-left: 20px;
}
.el-table th {
  background-color: #f3f6fb;
}
</style>
