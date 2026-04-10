import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const apiInstance = axios.create({
  baseURL: "https://data.egov.kz/api/v4/",
  params: {
    apiKey: API_KEY,
  },
});
