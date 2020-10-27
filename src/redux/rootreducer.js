import { combineReducers } from 'redux';
import titleReducer from './resumeeditor/titlereducer/titleReducer'


const rootReducer = combineReducers({
    resumetitle:titleReducer
})

export default rootReducer