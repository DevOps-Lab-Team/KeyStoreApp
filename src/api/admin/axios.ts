import axios from "axios";

// TODO add env variable
export const API_URL = "http://192.144.13.224:16874/";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Интерцептор для обработки ошибок
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Здесь можно добавить глобальную обработку ошибок
    // Например, перенаправление на страницу логина при 401 ошибке
    if (error.response?.status === 401) {
      // handle unauthorized
    }
    return Promise.reject(error);
  }
);
