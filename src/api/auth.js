import axios from "axios";

const API = 'http://localhost:3000/api'

//envia el usuario para el registro
export const registerRequest = user => axios.post(`${API}/register`, user)

//envia el usuario para el logeo
export const loginRequest = user => axios.post(`${API}/login`, user)
