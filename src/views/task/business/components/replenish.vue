<template>
  <el-dialog
    title="补货详情"
    :visible.sync="$store.state.task.addDetailsDialog"
    width="48%"
  >
    <div class="addDetails-box">
      <el-table :data="replenishDetails" style="width: 100%">
        <el-table-column prop="channelCode" label="货道编号" width="180">
        </el-table-column>
        <el-table-column prop="skuName" label="商品" width="180">
        </el-table-column>
        <el-table-column prop="expectCapacity" label="补货数量">
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('task', ['replenishDetails'])
  }
}
</script>

<style scoped lang="scss">
.addDetails-box {
  height: 340px;
  overflow: auto;
}
::v-deep .el-dialog__body {
  padding: 20px 50px;
}
</style>
