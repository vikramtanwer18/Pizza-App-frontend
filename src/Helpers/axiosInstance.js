import axios from "axios";

const axiosInstance = axios.create()//create new axios instance

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

axiosInstance.defaults.withCredentials = true //allow cookies to send backend

export default axiosInstance;







