export const index = () => {
    return (dispatch, state, { api }) => {

        api.get('/api/courses').then(courses => {
            return dispatch({
                type: 'COURSES_INDEX',
                courses
            })
        })

    }
}