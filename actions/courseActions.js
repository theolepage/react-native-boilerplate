export const index = () => {
    return async (dispatch, state, { api }) => {

        let courses = await api.get('/api/courses')
        
        return dispatch({
            type: 'COURSES_INDEX',
            courses
        })

    }
}