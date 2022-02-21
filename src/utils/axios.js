import axios from 'axios';
import router from '../router';
import config from '../../config';

import { localGet } from './index'
import { ElMessage } from 'element-plus';

// 这边由于后端没有区分测试和正式，姑且都写成一个接口。

const instance = axios.create({
    baseURL: config[import.meta.env.MODE].baseUrl,
    withCredentials: true,
    headers: {
        'X-Requested-With':'XMLHttpRequest',
        'token': localGet('token') || '',
    }
})
// 请求拦截器，内部根据返回值，重新组装，统一管理
instance.interceptors.response.use(res => {
    // if(typeof res.data !== 'object') {
    //     ElMessage.error('服务器异常！')
    //     return Promise.reject(res)
    // }
    if(res.data.resultCode !== 200) {
        if(res.data.message) ElMessage.error(res.data.message)
        if(res.data.resultCode === 419) {
            router.push({
                path: '/login'
            })
        }
        return Promise.reject(res.data)
    }
    if(res.data.resultCode == 419) {
        router.push({path: '/login'})
    }
    return res.data.data
})

const post = (url, data) => {//post请求
    return instance( {
        method: 'post',
        url: url,
        dataType: 'JSON',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    } )
}

const get = (url, data) => {//get请求
    return instance( {
        method: 'get',
        url: url,
        dataType: 'JSON',
        params: data
    } )
}

const delete1 = (url, data) => {
    return instance( {
        method: 'delete',
        url: url,
        dataType: 'JSON',
        params: data
    })
}

export default {get, post, delete1}