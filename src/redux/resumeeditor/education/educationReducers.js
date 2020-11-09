import {
    UPDATE_SCHOOL_COLLEGE,
    UDPATE_DEGREE,
    UPDATE_EDUCATION_START_DATE,
    UPDATE_EDUCATION_END_DATE,
    UPDATE_EDUCATION_CITY,
    Add_NEW_EDUCATION_BOX,
    DELETE_EDUCATION_BOX
} from '../../actionTypes.jsx'

const initialState = {
        education:[],
}



function educationReducer(state = initialState, action){

    switch (action.type) {
        case Add_NEW_EDUCATION_BOX : 
                        return {
                            ...state,
                            education: [...state.education, {"school_college":'',"degree":'',"city":'',"startDate":new Date(),"endDate":new Date(), "key":action.payload.number }] 
                        }
        case DELETE_EDUCATION_BOX : 
            return {
                ...state,
                education: state.education.filter(item => item.key !== action.payload.number)                     
            }
        case UPDATE_SCHOOL_COLLEGE : 
        return {
            ...state,
            education: state.education.map(
                (education, i) => education.key === action.payload.number ? {...education, school_college: action.payload.school_college}
                                        : education
            )                     
        }
        case UDPATE_DEGREE : 
                return {
                    ...state,
                    education: state.education.map(
                        (education, i) => education.key === action.payload.number ? {...education, degree: action.payload.degree}
                                                : education
                    )                     
                    }
        case UPDATE_EDUCATION_CITY : 
                return {
                    ...state,
                    education: state.education.map(
                        (education, i) => education.key === action.payload.number ? {...education, city: action.payload.city}
                                                : education
                    )                     
                    }
            case UPDATE_EDUCATION_START_DATE: 
                return {
                    ...state,
                    education: state.education.map(
                        (education, i) => education.key === action.payload.number ? {...education, startDate: action.payload.startDate}
                                                : education
                    )                     
                }
        
        case UPDATE_EDUCATION_END_DATE : 
                return {
                    ...state ,
                    education: state.education.map(
                        (education, i) => education.key === action.payload.number ? {...education, endDate: action.payload.endDate}
                                                : education
                    )                     
                }
        default:
                return state
    }
}

export default educationReducer
