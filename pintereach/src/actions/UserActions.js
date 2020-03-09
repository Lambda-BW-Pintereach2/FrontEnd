import { axiosWithAuth } from '../utils/axiosWithAuth'

export const ADD_ARTICLE = "ADD_ARTICLE"
export const EDIT_ARTICLE = "EDIT_ARTICLE"
export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const LOGSTATUS = "LOGSTATUS"

// const URL = ""

export const setLoggedIn = bool => {
    return { type: LOGSTATUS, payload: bool }
}

export const addArticle = article => dispatch => {
    console.log("articles from actions -> addArticles(articles)", article)
    dispatch({ type: ADD_ARTICLE, payload: article })
}

export const editArticle = article => dispatch => {
    console.log("articles from actions -> editArticles(articles)", article)
    dispatch({ type: EDIT_ARTICLE, payload: article })
}

export const deleteArticle = (userId, articleId) => dispatch => {
    axiosWithAuth()
        .delete(`/user/${userId}/articles/${articleId}`)
    dispatch({ type: DELETE_ARTICLE, payload: userId })
}