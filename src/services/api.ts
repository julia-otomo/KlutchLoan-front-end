import axios from "axios";

const api = axios.create({
  baseURL: "https://loan-api-lrkm.onrender.com/",
  // baseURL: "http://127.0.0.1:8000/",
  timeout: 6000,
});

export default api;
