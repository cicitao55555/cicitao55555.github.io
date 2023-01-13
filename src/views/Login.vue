<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">用户登录</div>
      <el-form :rules="rules" ref="ruleFormRef" :model="formData">
        <el-form-item label="" prop="account">
          <el-input placeholder="请输入账号" v-model="formData.account">
            <template #prefix>
              <span class="iconfont icon-account"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input placeholder="请输入密码" v-model="formData.password">
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="checkCode">
          <div class="check-code-panel">
            <el-input
              placeholder="请输入验证码"
              v-model="formData.checkCode"
              class="input-panel"
            >
            </el-input>
            <img
              :src="checkCodeUrl"
              class="check-code"
              @click="changeCheckCode"
            />
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="formData.rememberMe" :label="true"
            >记住我</el-checkbox
          >
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const api = {
  checkCode: 'api/checkCode',
}
const checkCodeUrl = ref(api.checkCode)

const changeCheckCode = () => {
  checkCodeUrl.value = api.checkCode + '?' + new Date().getTime()
}

//表单相关
const ruleFormRef = ref(null)
const formData = reactive({})
const rules = {
  account: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
  checkCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur',
    },
  ],
}

const login = () => {
  ruleFormRef.value.validate((valid) => {
    if (!valid) {
      return
    }
  })
}
</script>

<style lang="scss">
body {
  /* 加载背景图 */
  background-image: url(../assets/login-bg.jpg);
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
}
.login-panel {
  float: right;
  width: 350px;
  margin-right: 100px;
  margin-top: 200px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ddd;
}
.login-title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.check-code-panel {
  width: 100%;
  display: flex;
  align-items: center;
  .input-panel {
    flex: 2;
    margin-right: 5px;
  }
  .check-code {
    flex: 1;
    height: 30px;
    cursor: pointer;
  }
}
</style>
