import {
    UPDATE_PROFESSIONAL_DETAILS
} from '../../actionTypes.jsx'

const initialState = {
    professionalDetails:'',
}



function professionalDetailReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_PROFESSIONAL_DETAILS : 
                        return {
                            ...state,
                            professionalDetails:action.payload
                        }
        default:
                return state
    }
}

export default professionalDetailReducer
