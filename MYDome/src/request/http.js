import axios from 'axios'
import QS from 'qs'
// 导入提示信息
// import { Message } from 'element-ui'
// 环境的切换
if (process.env.NODE_ENV == "development") {
    // 开发
    axios.defaults.baseURL = "http://192.168.0.156:8880/"
} else if (process.env.NODE_ENV == "debug") {
    // debug
    axios.defaults.baseURL = "http://192.168.0.156:8880/"
} else if (process.env.NODE_ENV == "production") {
    // 生产
    axios.defaults.baseURL = "http://106.54.252.48:8880/"
}

// 设置请求超时
axios.defaults.timeout = 10000;

// post请求头的设置
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截 先省略

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200,说明接口请求成功,可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        console.log(error.response.status)
        // Message({
        //     message: `${error.response.status}`,
        //     type: 'warning'
        // });
    }
)

// get方法,对应get请求
// @param {String} url[请求的url地址]
// @param {Object} url[请求时携带的参数]

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// post方法,对应post请求
// @param {String} url[请求的url地址]
// @param {Object} url[请求时携带的参数]

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}