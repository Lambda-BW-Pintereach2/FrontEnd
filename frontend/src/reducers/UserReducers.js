import * as actionTypes from '../actions/UserActions'

const initialState = {
    loggedIn: false,
    logginIn: false,
    username: '',
    email: '',
    password: '',
    id: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loggedIn: true,
                id: action.payload
            }

        case actionTypes.REGISTER:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }

        case actionTypes.ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }
        default:
            return state
    }
}