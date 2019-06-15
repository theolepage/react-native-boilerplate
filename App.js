import React from 'react'

import API from './utils/API'
import AppContainer from './Navigation'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const api = new API()
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({api})))

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}