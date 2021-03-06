import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://betinfoot.tst/api'
})

let token = localStorage.getItem("access_token")
if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

Vue.prototype.$axios = axiosInstance


export {
    axiosInstance
}
