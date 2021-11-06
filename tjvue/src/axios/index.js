/* 封装axios */
import axios from 'axios'
// import VueAxios from 'vue-axios'
import Qs from 'qs'
import {ElMessage } from 'element-plus'

//统一的跨域前缀，其实就是你的SpringBoot的访问地址
axios.defaults.baseURL="http://localhost:8081/"
axios.defaults.timeout=100000

axios.interceptors.request.use(config=>{
	//在发起请求之前拦截处理，比如对参数格式，参数信息的验证，token信息
	return config;
})

 

export default axios