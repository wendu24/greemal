// http.js
import axios from 'axios';
import { ElNotification , ElMessageBox, ElMessage, ElLoading } from 'element-plus'

const service = axios.create({
    baseURL: '/api', // 基础URL
    timeout: 10000, // 请求超时时间
    // 其他配置...
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 可以在这里添加认证token等
        // if (store.getters.token) {
        //   config.headers['Authorization'] = `Bearer ${store.getters.token}`;
        // }
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        let repData = response.data;
        let msg = repData.message;
        let code = repData.code;
        if (code == 200){
            // 对响应数据做处理，例如只返回data部分
            return response.data.data;
        }else if (code === 401) {
            if (!isRelogin.show) {
                isRelogin.show = true;
                ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
                ).then(() => {
                    isRelogin.show = false;
                    useUserStore().logOut().then(() => {
                        location.href = '/index';
                    })
                }).catch(() => {
                    isRelogin.show = false;
                });
            }
            return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
        } else if (code === 500) {
            ElMessage({
                message: msg,
                type: 'error'
            })
            return Promise.reject(new Error(msg))
        } else if (code !== 200) {
            ElNotification.error({
                title: msg
            })
            return Promise.reject('error')
        } else {
            return Promise.resolve(res.data)
        }
    },
    error => {
        // 响应错误处理
        return Promise.reject(error);
    }
);

export default service;