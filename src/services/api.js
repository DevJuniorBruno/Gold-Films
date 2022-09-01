//API base:https://api.themoviedb.org/3/

//URL API: /movie/now_playing?api_key=7bb83699ab21dc2845538ee6f897e19b&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
});

export default api;