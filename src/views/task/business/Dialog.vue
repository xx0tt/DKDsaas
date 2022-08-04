<template>
  <div>
    <el-card shadow="never">
      <el-button
        icon="el-icon-circle-plus-outline"
        type="warning"
        class="Busin-btn"
        @click="centerDialogVisible = true"
        >新建</el-button
      >
      <el-button
        class="Busin-qxbtn"
        style="width: 90px"
        @click="taskVisible = true"
        >工单配置</el-button
      >
    </el-card>

    <!-- 提示框 -->
    <el-dialog
      title="新增工单"
      :visible.sync="centerDialogVisible"
      width="47%"
      @close="beforeClose"
    >
      <!-- 提示框内容区域 -->
      <div class="Busin-from">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-row type="flex" align="middle">
            <span class="from-span"
              ><i style="color: red">*</i> 设备编号：</span
            >
            <el-form-item style="width: 500px" prop="innerCode">
              <el-input
                placeholder="请输入"
                v-model="form.innerCode"
                maxlength="15"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-row>

          <el-row type="flex" align="middle">
            <span class="from-span"
              ><i style="color: red">*</i> 工单类型：</span
            >
            <el-form-item prop="taskType">
              <el-select
                v-model="form.taskType"
                placeholder="请选择"
                style="width: 420px"
              >
                <el-option label="补货工单" value="buhuo"></el-option>
              </el-select>
            </el-form-item>
          </el-row>

          <el-row type="flex" align="middle">
            <span class="from-span" style="transform: translateX(59px)">
              补单数量：</span
            >
          </el-row>

          <el-row type="flex" align="middle">
            <span class="from-span"
              ><i style="color: red">*</i> 运营人员：</span
            >
            <el-form-item prop="userName">
              <el-select
                v-model="form.userName"
                placeholder="请选择"
                style="width: 420px"
              >
                <!-- <el-option label="无数据" value="buhuo"></el-option> -->
              </el-select>
            </el-form-item>
          </el-row>

          <el-row type="flex" align="top">
            <span class="from-span" style="margin-left: 27px"
              ><i style="color: red">*</i> 备注：</span
            >
            <el-form-item style="width: 420px" prop="desc">
              <el-input
                type="textarea"
                v-model="form.desc"
                maxlength="40"
                show-word-limit
                :autosize="{ minRows: 3, maxRows: 12 }"
                placeholder="请输入备注（不超过40字）"
                style="width: 420px"
              ></el-input>
            </el-form-item>
          </el-row>

          <el-row type="flex" justify="center" style="margin-top: 30px">
            <el-button class="Busin-qxbtn" @click="centerDialogVisible = false"
              >取消</el-button
            >
            <el-button class="Busin-btn" type="warning" @click="submitFn"
              >确认</el-button
            >
          </el-row>
        </el-form>
      </div>
    </el-dialog>

    <!-- 工单配置提示框 -->
    <el-dialog
      title="工单配置"
      :visible.sync="taskVisible"
      width="47%"
      @close="beforeClose"
    >
      <div class="Busin-from">
        <el-row type="flex" align="middle" justify="start">
          <span class="from-span" style="margin-right: 60px"
            ><i style="color: red">*</i> 补货警戒线：</span
          >
          <el-input-number
            v-model="num"
            controls-position="right"
            :min="1"
            :max="100"
            style="width: 400px"
          ></el-input-number>
        </el-row>
        <el-row type="flex" justify="center" style="margin-top: 30px">
          <el-button class="Busin-qxbtn" @click="taskVisible = false"
            >取消</el-button
          >
          <el-button class="Busin-btn" type="warning" @click="setCordon"
            >确认</el-button
          >
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      taskVisible: false,
      num: 50,
      form: {
        innerCode: '',
        taskType: '',
        userName: '',
        desc: ''
      },
      rules: {
        innerCode: [
          { required: true, message: '请输入设备编号', trigger: 'blur' }
        ],
        taskType: [
          { required: true, message: '请选择工单类型', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请选择运营人员', trigger: 'blur' }
        ],
        desc: [{ required: true, message: '请输入备注', trigger: 'blur' }]
      }
    }
  },
  methods: {
    async submitFn() {
      try {
        await this.$refs.form.validate()
        console.log('表单验证成功')
      } catch (error) {
        console.log('表单验证失败')
      }
    },
    // 警戒线
    setCordon() {
      console.log(1)
    },
    // 弹出框关闭前执行回调
    beforeClose() {
      this.form = {
        innerCode: '',
        taskType: '',
        userName: '',
        desc: ''
      }
      this.num = 50
    }
  }
}
</script>

<style scoped lang="scss">
.Busin-btn {
  width: 90px;
  background-color: #ff6c28;
  &:hover {
    background-color: #e64c16;
  }
}
.Busin-qxbtn {
  width: 90px;
  margin-right: 20px;
  background-color: #fbf4f0;
  &:hover {
    background-color: #f3e7e1;
    color: #655b56;
  }
}

.Busin-from {
  .from-span {
    transform: translateX(50px);
  }
  .el-row {
    margin-bottom: 22px;
  }
  .el-form-item {
    transform: translateX(-20px);
    margin-bottom: 0;
  }
}
</style>
