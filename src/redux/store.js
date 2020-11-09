import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootreducer';
import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState } from '../localStorage'

const presistence = loadState();
//const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(
    rootReducer,
    presistence 
);
store.subscribe(() => {
  saveState(
    store.getState()
  );
});
export default store;