// import * as actionTypes from '../actions/UserActions'

const initialState = {
    loggedIn: false,
    loadingArticle: false,
    article: {
        id: "",
        article_label: "",
        url: ""
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FORMCHANGE":
            return {
                ...state,
                article: {
                    ...state.article,
                    [action.name]: action.value
                }
            };
        case "ADD_ARTICLE":
            return {
                ...state,
                loadingArticle: true

            }
        case "EDIT_ARTICLE":
            return {
                ...state,
                article: {
                    ...state.article,
                    article: action.article,
                    description: action.description,
                    link: action.link,
                    image: action.image
                }
            }
        case "RESETFORM":
            return {
                ...state,
                article: {
                    id: "",
                    article_label: "",
                    url: ""
                }
            }
        case "LOGSTATUS":
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}