import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "f3303de2-14fe-4a5f-b287-97d0d86181d8",
  },
});

export const API = {
  getUsers(page, count) {
    return axios_instance.get(`/users?page=${page}&count=${count}`);
  },
  getUserById(userId) {
    return axios_instance.get(`/profile/${userId}`);
  },
  followUser(userId) {
    return axios_instance.post(`/follow/${userId}`, {
      userId: userId,
    });
  },
  unfollowUser(userId) {
    return axios_instance.delete(`/follow/${userId}`);
  },
  loginUser(email, password) {
    return axios_instance.post("/auth/login", { email, password });
  },
  logoutUser() {
    return axios_instance.delete("/auth/login");
  },
  getMe() {
    return axios_instance.get("/auth/me");
  },
};
