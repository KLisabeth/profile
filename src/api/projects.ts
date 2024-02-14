import http from './http-global';

const api = {
 getProject: () => {
    http.get("projects");
},
}

export default api