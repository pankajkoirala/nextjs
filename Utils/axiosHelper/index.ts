import axios from "axios";
import { toast } from "react-toastify";
export const _axios = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

_axios.interceptors.request.use(
  async (req) => {
    const token = localStorage.getItem("");
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  function (err) {
    return Promise.reject(err);
  }
);

_axios.interceptors.response.use(
  (response) => {
    toast.success(response?.data?.message);

    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      toast.error("Internal Server Error");
    }
    toast.error(error?.response?.data?.message);
    return Promise.reject(error);
  }
);

export const GET_DATA = (endpoint) => _axios.get(endpoint);
export const POST_DATA = (endpoint, data) => _axios.post(endpoint, data);
export const UPDATE_DATA = (endpoint, data) => _axios.put(endpoint, data);
export const DELETE_DATA = (endpoint, id) => _axios.delete(endpoint, id);
