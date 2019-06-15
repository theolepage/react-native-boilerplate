export const logout = () => {
    return (dispatch) => {
        return dispatch({
            type: 'AUTH_LOGOUT'
        })
    }
}

export const login = (user) => {
    return (dispatch, state, { api }) => {

        api.post('/oauth/token', {
            'grant_type': 'password',
            'client_id': '2',
            'client_secret': api.client_secret,
            'username': user.username,
            'password': user.password
        }).then(data => {
            if (!data.error) {
                api.setToken(data.access_token)
                api.get('/api/user').then(user => {
                    return dispatch({
                        type: 'AUTH_LOGIN',
                        token: data.access_token,
                        user: user
                    })
                })
            } else {
                return dispatch({
                    type: 'AUTH_ERROR',
                    message: data.message
                })
            }
        })

    }
}