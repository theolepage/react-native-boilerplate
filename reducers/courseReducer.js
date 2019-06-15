const initState = {
    courses: null
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'COURSES_INDEX':
            return {
                ...state,
                courses: action.courses
            }
        default:
            return state
    }
}

export default courseReducer