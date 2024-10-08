import axios from "axios";
import Cookies from "js-cookie";
// import { useAuthContext } from '../hooks/useAuthContext'

const api = axios.create({
  baseURL: "https://library-management-system-hctm.onrender.com/api",
});
api.interceptors.request.use((config) => {
  // const { state } = useAuthContext()
  let token = Cookies.get("token");
    
  // check of token already exists (user is logged in)
  if (token) {
    console.log(token)
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;