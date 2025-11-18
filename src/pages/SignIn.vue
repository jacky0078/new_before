<template>
    <div class="legacy-page">

        <!-- Sign in Start -->
        <section class="sign-in-page">
            <div class="container sign-in-page-bg mt-5 p-0">
                <div class="row no-gutters">
                    <div class="col-md-6 text-center">
                        <div class="sign-in-detail text-white">
                            <a class="sign-in-logo mb-5" href="#"><img src="/assets/images/logo-white.png"
                                    class="img-fluid" alt="logo"></a>
                            <div class="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false"
                                data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1"
                                data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                <div class="item">
                                    <img src="/assets/images/login/1.png" class="img-fluid mb-4" alt="logo">
                                    <h4 class="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content.</p>
                                </div>
                                <div class="item">
                                    <img src="/assets/images/login/2.png" class="img-fluid mb-4" alt="logo">
                                    <h4 class="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content.</p>
                                </div>
                                <div class="item">
                                    <img src="/assets/images/login/3.png" class="img-fluid mb-4" alt="logo">
                                    <h4 class="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 position-relative" style="margin-top: 100px;">
                        <div class="login-register">
                            <div class="form-container"
                                :class="{ 'register-mode': !isLogin, 'shake': isError, 'success': isSuccess }">
                                <!-- 动态绑定标题内容 -->
                                <h2 :class="{ 'error': isError, 'success': isSuccess }">
                                    {{ errorMessage || successMessage || (isLogin ? '欢迎回来' : '创建账户') }}
                                </h2>
                                <form @submit.prevent="handleSubmit">
                                    <div class="input-row">
                                        <!-- 用户名输入框 -->
                                        <input type="text" id="username" v-model="username"
                                            @input="filterInput('username')" placeholder="用户名" required />
                                    </div>
                                    <div class="input-row password-container">
                                        <!-- 密码输入框 -->
                                        <input :type="showPassword ? 'text' : 'password'" id="password"
                                            v-model="password" @input="filterInput('password')" placeholder="密码"
                                            required />
                                        <i class="password-toggle-icon"
                                            :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                            @mousedown="showPassword = true" @mouseup="showPassword = false"
                                            @mouseleave="showPassword = false"></i>
                                    </div>
                                    <div class="button-group">
                                        <button type="submit" class="primary-button">{{ isLogin ? '登录' : '注册'
                                        }}</button>
                                        <button v-if="isLogin" type="button" @click="toggleMode"
                                            class="secondary-button">注册</button>
                                        <button v-else type="button" @click="toggleMode"
                                            class="secondary-button full-width-button">返回登录</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const username = ref('')
const password = ref('')
const isLogin = ref(true)
const showPassword = ref(false) // 控制密码是否可见
const isError = ref(false) // 控制错误状态
const isSuccess = ref(false) // 控制成功状态
const errorMessage = ref('') // 存储错误信息
const successMessage = ref('') // 存储成功信息
const router = useRouter()


onMounted(() => {
    //localStorage.removeItem('token');
});

// 过滤非法字符（只允许数字、字母和英文字符）
const filterInput = (field) => {
    const regex = /[^a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g // 只允许数字、字母和英文字符
    if (field === 'username') {
        username.value = username.value.replace(regex, '')
    } else if (field === 'password') {
        password.value = password.value.replace(regex, '')
    }
}

const handleSubmit = () => {
    if (username.value.trim() && password.value.trim()) {
        console.log("VITE_API_URL_LOGIN:", import.meta.env.VITE_API_URL);  // 打印环境变量，Vite中使用import.meta.env
        const url = isLogin.value
            ? '/api/login'
            : '/api/register';
        axios.post(url, {
            username: username.value.trim(),
            password: password.value.trim(),
        })
            .then(response => {
                if (response.data.success) {
                    if (isLogin.value) {
                        // 登录成功
                        showSuccess('登录成功')
                        setTimeout(() => {
                            const loginTime = new Date().getTime()
                            const sessionDuration = 3600000  // 会话持续时间为1小时（以毫秒为单位）
                            localStorage.setItem('loggedIn', 'true')
                            localStorage.setItem('loginTime', loginTime)  // 存储登录时间
                            localStorage.setItem('sessionDuration', sessionDuration)  // 存储会话持续时间
                            localStorage.setItem('token', response.data.token)  // 存储 token
                            router.push({ path: '/home/chat' })
                        }, 500)
                    } else {
                        // 注册成功
                        showSuccess('注册成功')
                        setTimeout(() => {
                            toggleMode()
                        }, 500)
                    }
                } else {
                    showError(response.data.message) // 显示错误信息
                }
            })
            .catch((error) => {
                console.error('请求错误:', error);
                console.error('错误响应:', error.response);
                showError(error.response?.data?.message || '网络请求失败，请检查网络和后端服务');
            })
    } else {
        showError('请输入用户名和密码') // 显示错误信息
    }
}

const toggleMode = () => {
    isLogin.value = !isLogin.value
    isError.value = false // 切换模式时重置错误状态
    errorMessage.value = '' // 重置错误信息
    isSuccess.value = false // 重置成功状态
    successMessage.value = '' // 重置成功信息
}

// 显示错误信息并触发抖动效果
const showError = (message) => {
    isError.value = true
    errorMessage.value = message
    setTimeout(() => {
        isError.value = false
    }, 600)
    setTimeout(() => {
        errorMessage.value = '' // 2秒后重置错误信息
    }, 900)
}

// 显示成功信息并触发成功样式
const showSuccess = (message) => {
    isSuccess.value = true
    successMessage.value = message
    setTimeout(() => {
        isSuccess.value = false
        successMessage.value = '' // 0.6秒后重置成功信息
    }, 500)
}
// static migration: original JS (if any) loads globally via index.html
</script>

<style scoped>
/* 登录注册页面的样式 */
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
    /* 更加柔和的浅灰色背景 */
    color: #333;
    /* 深灰文字 */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.password-container {
    position: relative;
}

.password-toggle-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #666;
}

.password-toggle-icon:hover {
    color: #000;
}



.form-container {
    background: #ffffff;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    /* 柔和阴影，增强视觉层次感 */
    width: 400px;
    text-align: center;
    transition: all 1s ease;
}

.form-container.register-mode {
    background-color: #fff;
    /* 浅一点的灰色背景 */
    color: #000000;
}

.form-container.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    50% {
        transform: translateX(10px);
    }

    75% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0);
    }
}

.form-container h2 {
    font-size: 1.8em;
    margin-bottom: 25px;
    color: #000000;
    transition: all 0.5s ease;
}

.form-container h2.error {
    color: #ff4d4d;
    /* //transform: scale(1.1); */
}

.form-container h2.success {
    color: #4caf50;
    /* 绿色 */
    /* transform: scale(1.1); */
}

.input-row {
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 12px;
    border: 1px solid #bbb;
    border-radius: 10px;
    font-size: 16px;
    background-color: #ffffff;
    color: #333;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

input:focus {
    border-color: #888;
    /* 边框颜色在焦点时更深 */
    outline: none;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
}

.primary-button {
    padding: 15px;
    background-color: #089bab;
    /* 全黑背景 */
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

.primary-button:hover {
    background-color: #a9e4eb;
}

.secondary-button {
    padding: 15px;
    background-color: #ffffff;
    color: #333333;
    border: 2px solid #089bab;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
}

.secondary-button:hover {
    background-color: #e6e6e6;
    color: #555555;
}

.full-width-button {
    width: 100%;
}
</style>
