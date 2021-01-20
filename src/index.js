import React from 'react'
import ReactDOM from 'react-dom'
import Reducer from './App'
import { createStore } from 'redux'
import {appReducer} from './reducers/appReducer'

import 'bulma/css/bulma.css'
// import './styles.scss'
import { Provider } from 'react-redux'

const store = createStore(appReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Reducer />
    </Provider>, 
rootElement)