// import * as actionTypes from '../actions/UserActions'

const initialState = {
    // loggedIn: localStorage.getItem('token') ? true : false,
    loggedIn: false,
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