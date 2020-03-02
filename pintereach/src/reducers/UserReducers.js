// import * as actionTypes from '../actions/UserActions'

const initialState = {
    // loggedIn: localStorage.getItem('token') ? true : false,
    loggedIn: false,
    article: {
        article: "",
        description: "",
        link: "",
        image: "",
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
                    article: "",
                    description: "",
                    link: "",
                    image: "",
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