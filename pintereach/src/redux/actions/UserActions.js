import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const ADD_ARTICLE = "ADD_ARTICLE"
export const UPDATE_ARTICLE = "UPDATE_ARTICLE"
export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const LOGSTATUS = "LOGSTATUS"
export const SET_ARTICLES = "SET_ARTICLES"
export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"


export const setLoggedIn = bool => {
    return { type: LOGSTATUS, payload: bool }
}

export const register = (userRegister) => dispatch => {
    axiosWithAuth()
        .post('/register', userRegister)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER, payload: res })
            window.localStorage.setItem("token", res)
        })
}

export const login = (user) => dispatch => {
    axiosWithAuth()
        .post('/login', user)
        .then(res => {
            console.log(res.data.user.id)
            dispatch({ type: LOGIN, payload: res.data.user.id })
            window.localStorage.setITem("token", res.data.token)
        })
        .catch(err => {
            console.log("error")
        })
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    window.localStorage.removeItem("token")
}

export const addArticle = article => dispatch => {
    axiosWithAuth()
    .post(`/articles/`)
    .then(res => res.data)
    console.log("articles from actions -> updateArticles(articles)", article)
    dispatch({ type: ADD_ARTICLE, payload: article })
}

export const updateArticle = article => dispatch => {
    axiosWithAuth()
      .put(`/articles/${article.id}`, { ...article, board_id: 1 })
      .then(() =>
        axiosWithAuth()
          .get('/articles')
          .then(res => dispatch({ type: SET_ARTICLES, payload: res.data }))
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }

export const deleteArticle = (userId, articleId) => dispatch => {
    axiosWithAuth()
        .delete(`/user/${userId}/articles/${articleId}`)
    dispatch({ type: DELETE_ARTICLE, payload: userId })
}