import axios from "axios";

const api = axios.create({
  // JSON Server is expected to run on port 3000
  baseURL: "http://localhost:3000",
});

export default api;