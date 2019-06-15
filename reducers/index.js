import { combineReducers } from 'redux'

import authReducer from './authReducer'
import courseReducer from './courseReducer'

const rootReducer = combineReducers({
    authReducer,
    courseReducer
})

export default rootReducer