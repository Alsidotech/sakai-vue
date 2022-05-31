import {Resource} from "../../services/http-resource-service";

export default {
    namespaced: true,
    state: {
        currentUser: localStorage.getItem('test_user') ? JSON.parse(localStorage.getItem('user')) : null,

        registerReq: new Resource('/register', 'post'),
        logInReq: new Resource('/login', 'post'),
        logOutReq: new Resource('/logout', 'get'),
    },
    mutations: {
        SET_CURRENT_USER: (state, payload) => {
            state.currentUser = payload
        },
    },
    actions: {},
}
