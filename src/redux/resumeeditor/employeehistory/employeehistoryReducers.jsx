import {
    UPDATE_EMPLOYEE_HISTORY_JOB_TITLE,
    UDPATE_EMPLOYER,
    UPDATE_START_DATE,
    UPDATE_END_DATE,
    Add_NEW_EMPLYEEMENT_BOX,
    DELETE_EMPLYEEMENT_BOX,
    UPDATE_EMPLOYMENT_HISTORY_TITLE
} from '../../actionTypes.jsx'

const initialState = {
        employeehistory:[],
        title:'Employment History'
}



function employeeHistoryReducer(state = initialState, action){

    switch (action.type) {
        case UPDATE_EMPLOYMENT_HISTORY_TITLE : 
            return {
                ...state,
                title: action.payload.title
            }
        case Add_NEW_EMPLYEEMENT_BOX : 
            return {
                ...state,
                employeehistory: [...state.employeehistory, {"jobtitle":'',"employer":'',"startDate":new Date(),"endDate":new Date(), "key":action.payload.number }] 
            }
        case DELETE_EMPLYEEMENT_BOX : 
            return {
                ...state,
                employeehistory: state.employeehistory.filter(item => item.key !== action.payload.number)                     
            }
        case UPDATE_EMPLOYEE_HISTORY_JOB_TITLE : 
        return {
            ...state,
            employeehistory: state.employeehistory.map(
                (employeehistory, i) => employeehistory.key === action.payload.number ? {...employeehistory, jobtitle: action.payload.jobtitle}
                                        : employeehistory
            )                     
        }
        case UDPATE_EMPLOYER : 
                            return {
                                ...state,
                                employeehistory: state.employeehistory.map(
                                    (employeehistory, i) => employeehistory.key === action.payload.number ? {...employeehistory, employer: action.payload.employer}
                                                            : employeehistory
                                )                     
                                }
        case UPDATE_START_DATE: 
                return {
                    ...state,
                    employeehistory: state.employeehistory.map(
                        (employeehistory, i) => employeehistory.key === action.payload.number ? {...employeehistory, startDate: action.payload.startDate}
                                                : employeehistory
                    )                     
                }
        
        case UPDATE_END_DATE : 
                return {
                    ...state ,
                    employeehistory: state.employeehistory.map(
                        (employeehistory, i) => employeehistory.key === action.payload.number ? {...employeehistory, endDate: action.payload.endDate}
                                                : employeehistory
                    )                     
                }
        default:
                return state
    }
}

export default employeeHistoryReducer
