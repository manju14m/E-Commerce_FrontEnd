import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from '../Reducer'
import Products from '../Data/ProductData'
import thunk from "redux-thunk"





const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()