import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "/", 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});