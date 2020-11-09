import {
    UPDATE_PROFESSIONAL_DETAILS,
    UPDATE_PROFESSIONAL_DETAILS_TITLE
} from '../../actionTypes.jsx'

const initialState = {
    professionalDetails:'',
    title:'Professional Details',
}



function professionalDetailReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_PROFESSIONAL_DETAILS : 
            return {
                ...state,
                professionalDetails:action.payload.description
            }
        case UPDATE_PROFESSIONAL_DETAILS_TITLE : 
            return {
                ...state,
                title:action.payload.title
            }
        default:
                return state
    }
}

export default professionalDetailReducer
