import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.jikan.moe/v3',
    headers: { 'Content-Type': 'application/json' },

})
