import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './rootReducer'
const data = window.localStorage.getItem('my_pokemon') 
const initialState = {
    myPokemon: JSON.parse(data) ?? {},
}

const middlewares = [thunk]
let devtools = (x) => x

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const Store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)

// Store.subscribe(()=>{
//     window.localStorage.setItem('my_pokemon', JSON.stringify(Store.getState().myPokemon))
//   })