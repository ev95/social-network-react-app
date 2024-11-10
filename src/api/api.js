import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

export const API = {
  getUsers(page, count) {
    return axios_instance.get(`/users?page=${page}&count=${count}`);
  },
  getUserById(userId) {
    return axios_instance.get(`/profile/${userId}`);
  },
};
