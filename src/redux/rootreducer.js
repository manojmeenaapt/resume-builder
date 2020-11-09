import { combineReducers } from 'redux';
import titleReducer from './resumeeditor/titlereducer/titleReducer'
import languageReducer from './resumeeditor/languagereducer/languageReducer'
import personalDetailReducer from './resumeeditor/personaldetails/personaldetailsReducers'
import professionalDetailReducer from './resumeeditor/professionaldetails/professionaldetailsReducers'
import employeeHistoryReducer from './resumeeditor/employeehistory/employeehistoryReducers'
import educationReducer from './resumeeditor/education/educationReducers'
import websitelinkReducer from './resumeeditor/websitelink/websitelinkReducer'


const rootReducer = combineReducers({
    resumetitle:titleReducer,
    language:languageReducer,
    personaldetails: personalDetailReducer,
    professionaldetails:professionalDetailReducer,
    employeehistory:employeeHistoryReducer,
    education:educationReducer,
    website_link:websitelinkReducer
})

export default rootReducer