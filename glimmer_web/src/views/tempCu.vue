<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { onMounted, reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
// 定义提交标志
const isSubmitFlag = ref(false)
// 定义登录表单数据类型
interface LoginForm {
  username: string
  password: string
}
// 创建响应式登录表单数据
const loginform = reactive<LoginForm>({
  username: '',
  password: '',
})
// 创建登录表单引用
const loginFormRef = ref<FormInstance>()
// 定义表单验证规则
const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
})
const responseResult = ref()
const loginSuccess = ref(false)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      try {
        responseResult.value = login(loginform.username, loginform.password)
        loginSuccess.value = true
        router.push('/manage')
      } catch (error) {
        console.error('登录请求失败:', error)
        loginSuccess.value = false
      }
      console.log('submit!')
      isSubmitFlag.value = true
      setTimeout(() => {
        isSubmitFlag.value = false
      }, 2000)
    } else {
      console.log('error submit!', fields)
    }
  })
}

import login from '@/api/login/login'
import router from '@/router'
const isRemembered = ref(false)
function EnableRememberMe() {
  if (isRemembered.value) {
    // token记录
    localStorage.setItem('token', responseResult.value.token)
    // 用户名密码记录
    localStorage.setItem('username', loginform.username)
    localStorage.setItem('password', loginform.password)
  } else {
    if (localStorage.getItem('token')) {
      localStorage.clear()
    }
  }
}
onMounted(() => {
  const rememberedUsername = localStorage.getItem('username')
  const rememberedPassword = localStorage.getItem('password')
  if (rememberedUsername && rememberedPassword) {
    loginform.username = rememberedUsername
    loginform.password = rememberedPassword
    isRemembered.value = true
  }
})

const showMsg = ref(false)
function isShowMsg() {
  if (loginSuccess.value === false) {
    showMsg.value = true
    setTimeout(() => {
      showMsg.value = false
    }, 2000)
  }
}

const forgetPassword = ref('忘记密码?')
function changeForgetPassword() {
  if (forgetPassword.value === '忘记密码?') {
    forgetPassword.value = '请联系管理员重置密码!'
    setTimeout(() => {
      forgetPassword.value = '忘记密码?'
    }, 2000)
  }
}
</script>

<template>
  <el-alert
    class="loginFailure"
    title="登陆失败，请重试！"
    type="error"
    effect="dark"
    v-if="showMsg"
    center
  />
  <el-container>
    <div class="login_box">
      <el-header>
        <el-avatar :icon="UserFilled" />
        <h1 class="title">微光</h1>
        <h2 class="subtitle">电商后台管理</h2>
      </el-header>
      <el-main>
        <el-form :model="loginform" :rules="rules" ref="loginFormRef">
          <el-form-item prop="username">
            <el-input v-model="loginform.username" placeholder="请输入用户名" size="large" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginform.password"
              placeholder="请输入密码"
              type="password"
              size="large"
              show-password
            />
          </el-form-item>
          <el-form-item class="login-util">
            <el-checkbox label="记住我" v-model="isRemembered" />
            <span @click="changeForgetPassword">{{ forgetPassword }}</span>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              style="width: 100%"
              @click="(submitForm(loginFormRef), EnableRememberMe(), isShowMsg())"
              :loading="isSubmitFlag"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <p>© 2025 微光后台管理</p>
        <p>v1.0.0</p>
      </el-footer>
    </div>
  </el-container>
</template>

<style scoped lang="scss">
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginFailure {
  position: absolute;
  top: 20px;
  width: 800px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.el-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(168, 85, 255, 0.3));
  @include center;

  .login_box {
    width: 420px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    .el-header {
      @include center;
      height: auto;
      flex-direction: column;
      text-align: center;
      border-radius: 10px 10px 0 0;
      padding: 10px 0 0 0;

      .el-avatar {
        width: 64px;
        height: 64px;
        background-color: #a855f7;
        flex-shrink: 0;
      }

      .title {
        font-size: 20px;
        margin-top: 10px;
        font-weight: bold;
        color: #6366f1;
      }

      .subtitle {
        font-size: 16px;
        margin-top: 4px;
      }
    }

    .el-main {
      flex: 1;
      padding: 20px 40px;

      .el-input {
        width: 100%;
        border-radius: 10px;
        background-color: #f2f2f2b3;
      }

      :deep(.login-util .el-form-item__content) {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .el-button {
        background-color: #6366f1;
      }
    }

    .el-footer {
      height: auto;
      @include center;
      flex-direction: column;
      border-radius: 0 0 10px 10px;
      padding: 10px 0;
    }
  }
}
</style>
