/**
 * Returns
 * @param {string} url
 * @param { [key: string]: any } data
 * @returns {Promise} Promise response
 */


const baseUrl: string = ""
const apiVersion: string = ""
const baseURL = `${baseUrl}${apiVersion}`;

const createHeader = () => {
    const token = sessionStorage.getItem('auth_token');
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `bearer ${token}`
    };
};

const get = (url: string): Promise<Response> => {
    const options: RequestInit = {
        method: 'GET',
        headers: createHeader()
    };
    return fetch(`${baseURL}${url}`, options);
};

const post = (url: string, data: object): Promise<Response> => {
    const options: RequestInit = {
        method: 'POST',
        headers: createHeader(),
        body: JSON.stringify(data)
    };
    return fetch(`${baseURL}${url}`, options);
};

const put = (url: string, data: object): Promise<Response> => {
    const options: RequestInit = {
        method: 'PUT',
        headers: createHeader(),
        body: JSON.stringify(data)
    };
    return fetch(`${baseURL}${url}`, options);
};

const remove = (url: string): Promise<Response> => {
    const options: RequestInit = {
        method: 'DELETE',
        headers: createHeader()
    };
    return fetch(`${baseURL}${url}`, options);
};
const filePost = (url: string, data: FormData): Promise<Response> => {
    const token = sessionStorage.getItem('auth_token');
    const options: RequestInit = {
        method: 'POST',
        headers: {
            Accept: '*/*',
            Authorization: `bearer ${token}`
        },
        body: data
    };
    return fetch(`${baseURL}${url}`, options);
};
const postId = (url: string): Promise<Response> => {
    const options: RequestInit = {
        method: 'POST',
        headers: createHeader()
    };
    return fetch(`${baseURL}${url}`, options);
};

export const globalFetch = {
    get,
    post,
    put,
    remove,
    filePost,
    postId
};

export default globalFetch;