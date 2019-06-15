export const logout = () => {
    return (dispatch) => {
        return dispatch({
            type: 'AUTH_LOGOUT'
        })
    }
}

export const login = (username, password) => {
    return async (dispatch, state, { api }) => {

        let data = await api.post('/oauth/token', {
            'grant_type': 'password',
            'client_id': '2',
            'client_secret': api.client_secret,
            'username': username,
            'password': password
        })

        if (data.error) {
            return dispatch({
                type: 'AUTH_ERROR',
                message: data.message
            })
        }

        api.setToken(data.access_token)
        let user = await api.get('/api/user')
        return dispatch({
            type: 'AUTH_LOGIN',
            token: data.access_token,
            user: user
        })

    }
}