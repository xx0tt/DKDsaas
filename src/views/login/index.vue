<template>
  <div class="login_box">
    <div class="box">
      <el-form ref="userInfo" :model="userInfo" :rules="rules" label-width="auto" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input
            v-model="userInfo.mobile"
            prefix-icon="el-icon-mobile-phone"
            type="text"
            autocomplete="off"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password" prefix-icon="el-icon-lock" show-password type="password" autocomplete="off" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model.number="userInfo.code" prefix-icon="el-icon-circle-check" placeholder="请输入验证码">
            <template #suffix>
              <div><img src="@/assets/images/yanzhengma.jpg" alt=""></div>
            </template>
          </el-input>
        </el-form-item>
        <el-button @click="submitForm()">登录</el-button>
      </el-form>
      <img class="logo" src="@/assets/images/loginLogo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        mobile: 'admin',
        password: 'admin',
        code: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度为6~16位', trigger: 'blue' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 4, message: '验证码长度为4位', trigger: 'blue' }
        ]
      }
    }
  },
  methods: {
    // 点击登录
    submitForm() {
      // 校验规则
      this.$refs['userInfo'].validate((valid) => {
        if (valid) {
          // 校验成功
          alert('submit!')
        } else {
          // 校验失败
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_box {
  height: 100%;
  width: 100%;
  background: url('~@/assets/images/background.png') no-repeat center;
  background-size: cover;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 76px 35px 0;
    background-color: #fff;
    width: 518px;
    height: 388px;
    border-radius:10px;
    ::v-deep .el-input__inner{
      height: 52px;
      padding-left: 40px;
    }
    ::v-deep .el-input__icon{
      height: 108%;
      font-size: 20px;
    }
    ::v-deep .el-input__prefix{
      left:10px;
    }
    ::v-deep .el-input__suffix{
      right: 0;
    }
    .el-button{
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg,#2e50e1,#6878f0);
      border-radius: 8px;
      color:#fff;
      font-size: 14px;
    }
    .logo{
      position: absolute;
      top: -48px;
      left: 50%;
      transform: translateX(-50%);
      width: 96px;
      height: 96px;
      }
  }
}
</style>
