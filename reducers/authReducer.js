const initState = {
    token: null,
    user: {},
    message: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN':
            return {
                ...state,
                token: action.token,
                user: action.user
            }
        case 'AUTH_LOGOUT':
            return {
                ...state,
                token: null
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export default authReducer