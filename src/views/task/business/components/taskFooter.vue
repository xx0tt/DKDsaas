<template>
  <el-row type="flex" align="middle" class="footer">
    <el-col class="text"
      >共{{ totalCount }}条记录 第{{ pageIndex }}/{{ totalPage }}页</el-col
    >
    <el-col>
      <el-row type="flex" justify="end">
        <div
          class="left"
          @click="pageUp"
          :class="{ jinyong: pageIndex === '1' }"
        >
          上一页
        </div>
        <div
          class="right"
          @click="pageDown"
          :class="{ jinyong: pageIndex === totalPage }"
        >
          下一页
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('task', ['pageIndex', 'totalCount', 'totalPage'])
  },
  methods: {
    pageUp() {
      this.$emit('pageUp')
    },
    pageDown() {
      this.$emit('pageDown')
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding-left: 30px;
  height: 100px;
  .text {
    color: #dbdfe5;
  }
  .left,
  .right {
    cursor: pointer;
    margin-right: 60px;
    width: 70px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #d5ddf8;
    color: #606266;
    font-size: 13px;
  }
  .left {
    margin-right: 30px;
  }
  .jinyong {
    background-color: #edf0f9;
    color: #d8dde3;
    cursor: not-allowed;
  }
}
</style>
