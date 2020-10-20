import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootreducer';
import { createStore } from 'redux'


const store = createStore(rootReducer, composeWithDevTools());

export default store;