<template>
  <el-dialog
    title="工单详情"
    :visible.sync="$store.state.task.detailDialog"
    width="48%"
  >
    <!-- 内容 -->
    <div class="task-img">
      <!-- 待办 -->
      <template v-if="TaskInfo.taskStatus === 1">
        <div class="backlog">
          <svg-icon iconClass="闹钟" className="svg-nz" />
        </div>
        <span>待办</span>
        <img src="http://likede2-admin.itheima.net/img/pic_1.834b274c.png" />
      </template>

      <!-- 取消 -->
      <template v-if="TaskInfo.taskStatus === 3">
        <div class="cancel">
          <svg-icon iconClass="感叹号" className="svg-qx" />
        </div>
        <span>取消</span>
        <img src="http://likede2-admin.itheima.net/img/pic_3.e8208e34.png" />
      </template>

      <!-- 完成 -->
      <template v-if="TaskInfo.taskStatus === 4">
        <div class="complete">
          <svg-icon iconClass="完成" />
        </div>
        <span>完成</span>
        <img src="http://likede2-admin.itheima.net/img/pic_4.3b5af41c.png" />
      </template>
    </div>

    <div class="content">
      <el-row>
        <el-col :span="12">设备编号： {{ TaskInfo.innerCode }}</el-col>
        <el-col :span="12"
          >创建日期： {{ TaskInfo.createTime | dayformat }}</el-col
        >
        <el-col :span="12" v-if="TaskInfo.taskStatus === 3"
          >取消日期： {{ TaskInfo.updateTime | dayformat }}</el-col
        >
        <el-col :span="12">运营人员： {{ TaskInfo.userName }}</el-col>
        <el-col :span="12"
          >工单类型：
          {{ TaskInfo.taskType && TaskInfo.taskType.typeName }}</el-col
        >
        <el-col :span="12"
          >补货数量：
          <span class="replenish" @click="replenishFn">补货详情</span></el-col
        >
        <el-col :span="12">工单方式： 手动</el-col>
        <el-col :span="12"> 备注： {{ TaskInfo.desc || '无' }}</el-col>
      </el-row>
      <el-row type="flex" justify="center" style="transform: translatex(-20px)">
        <el-button v-if="TaskInfo.taskStatus === 3">重新创建</el-button>
        <el-button v-if="TaskInfo.taskStatus === 1">取消工单</el-button>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {}
  },
  props: ['TaskInfo'],
  filters: {
    dayformat(val) {
      return dayjs(val).format('YYYY.MM.DD HH:mm:ss')
    }
  },
  methods: {
    addDetails() {
      console.log(this.TaskInfo.taskId)
    },
    // 点击捕获详情
    replenishFn() {
      this.$store.dispatch('task/getreplenish')
    }
  }
}
</script>

<style scoped lang="scss">
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

    // 代办icon样式
    &.backlog {
      background-color: #ff665f;
      .svg-nz {
        fill: #fff;
      }
    }

    // 取消icon样式
    &.cancel {
      .svg-qx {
        width: 25px;
        height: 25px;
      }
    }

    // 完成icon样式
    &.complete {
      .svg-icon {
        transform: scale(1.8);
      }
    }
  }
  img {
    margin-left: 350px;
    transform: translateY(-5px);
  }
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
  .replenish {
    cursor: pointer;
    color: #5f84ff;
  }
}
</style>
