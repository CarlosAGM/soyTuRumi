import { verify } from "jsonwebtoken";
import axios from "./axios";

const API = "http://localhost:4000/api";

export const registroRequest = (user) => axios.post(`/registro`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verificarTokenRequest = () => axios.get("/verificar");
