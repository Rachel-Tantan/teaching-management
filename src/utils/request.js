import axios from 'axios'

const request = axios.create({
    // baseURL:process.env.VUE_APP_BASE_API,
    baseURL:'',
    timeout:5000
})

export default request