import React from 'react'
import ReactDOM from 'react-dom'
import { reducer } from './reducers/index'
import ShoppingList from './ShoppingList'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Décommenter ces 2 lignes pour activer le plugin redux dev tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reducer)

ReactDOM.render(<ShoppingList title="liste de courses" />, document.getElementById('root'))
