import axios from "axios";

const API = "http://localhost:4000/api";

export const registroRequest = (user) => axios.post(`${API}/registro`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);
