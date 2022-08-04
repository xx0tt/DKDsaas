<template>
  <div>
    <!-- 头部组件 -->
    <Header />

    <!-- 内容区域 -->
    <div class="Busin-main">
      <Dialog />

      <!-- 表单 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        class="Busin-table"
        @cell-click="detail"
      >
        <el-table-column prop="date" label="序号" type="index" />
        <el-table-column prop="taskCode" label="工单号" />
        <el-table-column prop="innerCode" label="设备编号" />
        <el-table-column prop="taskType.typeName" label="工单类型" />

        <el-table-column
          prop="createType"
          label="工单方式"
          :formatter="taskType"
        />

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

      <!-- 详情弹出层 -->
      <el-dialog title="工单详情" :visible.sync="dialogVisible" width="48%">
        <!-- 内容 -->
        <div class="task-img">
          <div><svg-icon iconClass="闹钟" className="svg-nz" /></div>
          <span>待办</span>
          <img src="http://likede2-admin.itheima.net/img/pic_1.834b274c.png" />
        </div>
        <div class="content">
          <el-row>
            <el-col :span="12">设备编号： {{ TaskInfo.innerCode }}</el-col>
            <el-col :span="12"
              >创建日期： {{ TaskInfo.createTime | dayformat }}</el-col
            >
            <el-col :span="12"
              >取消日期： {{ TaskInfo.updateTime | dayformat }}</el-col
            >
            <el-col :span="12">运营人员： {{ TaskInfo.userName }}</el-col>
            <el-col :span="12"
              >工单类型：
              {{ TaskInfo.taskType && TaskInfo.taskType.typeName }}</el-col
            >
            <el-col :span="12">补货数量： 补货详情</el-col>
            <el-col :span="12">工单方式： 手动</el-col>
            <el-col :span="12"> 备注： {{ TaskInfo.desc || '无' }}</el-col>
          </el-row>
          <el-row type="flex" justify="center"
            ><el-button>取消工单</el-button></el-row
          >
        </div>
      </el-dialog>

      <!-- 底部分页区域 -->
      <!-- <el-row type="flex">
        <el-col>共942条记录 第1/95页</el-col>
        <el-col>2</el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Dialog from './Dialog.vue'
import dayjs from 'dayjs'
export default {
  filters: {
    dayformat(val) {
      return dayjs(val).format('YYYY.MM.DD HH:mm:ss')
    }
  },
  components: { Header, Dialog },
  data() {
    return {
      tableData: [],
      TaskInfo: {},
      isA: false,
      dialogVisible: false
    }
  },

  created() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      await this.$store.dispatch('task/getTaskList')
      this.tableData = this.$store.state.task.taskList
    },
    dateFilter(a, b, c) {
      return dayjs(c).format('YYYY.MM.DD HH:mm:ss')
    },
    taskType(a, b, c) {
      return ['自动', '手动'][c]
    },
    taskStatus(a, b, c) {
      return ['待办', '进行', '取消', '完成'][c - 1]
    },
    async detail(row) {
      if (this.isA) {
        this.dialogVisible = true
        await this.$store.dispatch('task/getTaskInfo', row.taskId)
        this.TaskInfo = this.$store.state.task.TaskInfo
      }
      this.isA = false
    }
  }
}
</script>

<style scoped lang="scss">
.Busin-main {
  margin-top: 20px;
  background-color: #fff;
  .Busin-table {
    padding-left: 20px;
  }
  .task-img {
    padding-left: 25px;
    background-color: #f8f8f8;
    height: 50px;
    display: flex;
    align-items: center;
    div {
      margin-right: 10px;
      text-align: center;
      line-height: 28px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      background-color: #ff665f;
      .svg-nz {
        fill: #fff;
      }
    }
    img {
      margin-left: 310px;
      transform: translateY(-5px);
    }
  }
  ::v-deep .el-dialog {
    border-radius: 10px;
  }
  ::v-deep .el-dialog__title {
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  .content {
    margin-top: 30px;
    padding-left: 30px;
    .el-row,
    .el-col {
      margin-bottom: 20px;
    }
    .el-button {
      background: #fbf4f0;
      &:hover {
        background-color: #f3e7e1;
        color: #7b716c;
      }
    }
  }
}
</style>
