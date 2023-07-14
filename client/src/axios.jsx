import axios from "axios";

export const makeRequest  = axios.create({
    baseURL: "https://api-lets-connect.onrender.com",
    withCredentials: true,
})