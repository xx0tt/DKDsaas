<template>
  <div>
    <el-card shadow="never" class="header">
      <el-row type="flex" :gutter="10" align="middle">
        工单编号：
        <el-col :span="5">
          <el-input v-model="inputNum" placeholder="请输入内容"> </el-input>
        </el-col>
        <el-col :span="9">
          工单状态：
          <el-select v-model="inputStatus" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-search" class="header-btn" @click="query"
            >查询</el-button
          >
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: '',
      inputStatus: '',
      options: [
        {
          value: '代办',
          label: '代办'
        },
        {
          value: '进行',
          label: '进行'
        },
        {
          value: '取消',
          label: '取消'
        },
        {
          value: '完成',
          label: '完成'
        }
      ]
    }
  },
  methods: {
    query() {
      // 1:待办;2:进行;3:取消;4:完成

      const index = ['代办', '进行', '取消', '完成'].findIndex(
        (item) => item === this.inputStatus
      )
      this.$emit('query', {
        taskCode: this.inputNum,
        status: index === -1 ? '' : index + 1
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  font-size: 14px;
  color: #606266;
  .header-btn {
    transform: translateX(-150px);
    width: 90px;
    font-size: 14px;
    background: #5f84ff;
    color: #fff;
    &:hover {
      background-color: #5373e0;
    }
  }
}
</style>
