// import {env} from "@/env";
// import store from '../store';

let axios = require('axios');
// import {setupCache} from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
/*const cache = setupCache({
    // maxAge: 2 * 60 * 1000
});*/

const api = axios.create({
    // adapter: cache.adapter,
});

api.interceptors.request.use(function (config) {
    config.headers = config.headers || {};
    config.headers.Authorization = "Bearer " + localStorage.getItem('access_token');
    if (config.noCache) {
        config.adapter = null
    }
    // let user = localStorage.getItem('user');
    // if (user) {
    //     config.headers.user = user;
    // }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use(async function (response) {
    return response;
}, function (error) {
    // if (error.response.data.message === "Unauthenticated.") {
    //     localStorage.removeItem('test_user');
    //     localStorage.removeItem('test_token');
    //     store.commit('users/NOTIFICATION_POP_UP', true);
    //     store.commit('users/SET_MESSAGE', {text:'Your token has been expired. Please login again!', response:'info'});
    //     window.location.redirect('/login')
    // }
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        error = error.response;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        error = error.request;
    } else {
        // Something happened in setting up the request that triggered an Error
        error = error.message
    }

    const logoutErrors = ["Wrong number of segments", "logged out"];
    if (error.data && logoutErrors.includes(error.data)) {
        window.location.reload();
    }

    return Promise.reject(error);
});

export const http = api;
