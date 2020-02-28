import { axiosWithAuth } from '../utils/axiosWithAuth'

export const ERROR = "ERROR"
export const LOGIN = "LOGIN"
export const ADD_ARTICLE = "ADD_ARTICLE"
export const UPDATE_ARTICLE = "UPDATE_ARTICLE"
export const LOGGIN_IN = "LOGGIN_IN"
export const SET_USER = "SET_USER"
export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const LOGOUT = "LOGOUT"

const URL = ""

export const login = (user, fn) => dispatch => {
    axiosWithAuth()
        .post('/login', user)
        .then(res => {
            console.log(res.data.user.id)
            dispatch({ type: LOGIN, payload: res.data.user.id })
            window.localStorage.setITem("token", res.data.token)
            fn(`/user/${res.data.user.id}`)
        })
        .catch(err => {
            console.log("error")
        })
}