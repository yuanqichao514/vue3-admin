import axios from 'axios';
import router from '../router';
import config from '~/config';

import { localGet } from './index'
import { ElMessage } from 'element-plus';

// 这边由于后端没有区分测试和正式，姑且都写成一个接口。
axios.defaults.baseURL = config[import.meta.env.MODE].baseURL
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true
// 请求头，headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localGet('token') || ''
// 默认post请求，使用application/json形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器，内部根据返回值，重新组装，统一管理
axios.interceptors.response.use(res => {
    if(typeof res.data !== 'object') {
        ElMessage.error('服务器异常！')
        return Promise.reject(res)
    }
    if(res.data.resultCode !== 200) {
        if(res.data.message) ElMessage.error(res.data.message)
        if(res.data.resultCode === 419) {
            router.push({
                path: '/login'
            })
        }
        return Promise.reject(res.data)
    }
    return res.data.data
})

export default axios