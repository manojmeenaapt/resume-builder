import { combineReducers } from 'redux';
import titleReducer from './resumeeditor/titlereducer/titleReducer'
import languageReducer from './resumeeditor/languagereducer/languageReducer'
import personalDetailReducer from './resumeeditor/personaldetails/personaldetailsReducers'


const rootReducer = combineReducers({
    resumetitle:titleReducer,
    language:languageReducer,
    personaldetails: personalDetailReducer
})

export default rootReducer