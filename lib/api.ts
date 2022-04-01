import axios from "axios";

const headers=new Headers()


const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: true,
  headers: {'Access-Control-Allow-Credentials':true,
"Access-Control-Allow-Origin":"*"}
 
});

export default api;
