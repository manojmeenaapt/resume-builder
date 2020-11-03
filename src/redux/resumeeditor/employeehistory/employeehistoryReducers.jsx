import {
    UPDATE_EMPLOYEE_HISTORY_JOB_TITLE,
    UDPATE_EMPLOYER,
    UPDATE_START_DATE,
    UPDATE_END_DATE,
    Add_NEW_EMPLYEEMENT_BOX
} from '../../actionTypes.jsx'

const initialState = {
        employeehistory:[],
        /*jobtitle:'',
        employer:'',
        startDate:'',
        endDate:'',*/
}



function employeeHistoryReducer(state = initialState, action){

    switch (action.type) {
        case Add_NEW_EMPLYEEMENT_BOX : 
                        return {
                            ...state,
                            employeehistory: [...state.employeehistory, {"jobtitle":'',"employer":'',"startDate":'',"endDate":'' }] 
                        }
        case UPDATE_EMPLOYEE_HISTORY_JOB_TITLE : 
        return {
            ...state,
            employeehistory: state.employeehistory.map(
                (employeehistory, i) => i === action.payload.number ? {...employeehistory, jobtitle: action.payload.jobtitle}
                                        : employeehistory
            )                     
        }
        case UDPATE_EMPLOYER : 
                            return {
                                ...state,
                                employeehistory: state.employeehistory.map(
                                    (employeehistory, i) => i === action.payload.number ? {...employeehistory, employer: action.payload.employer}
                                                            : employeehistory
                                )                     
                                }
        case UPDATE_START_DATE: 
                return {
                    ...state,
                    employeehistory: state.employeehistory.map(
                        (employeehistory, i) => i === action.payload.number ? {...employeehistory, startDate: action.payload.startDate}
                                                : employeehistory
                    )                     
                }
        
        case UPDATE_END_DATE : 
                return {
                    ...state ,
                    employeehistory: state.employeehistory.map(
                        (employeehistory, i) => i === action.payload.number ? {...employeehistory, endDate: action.payload.endDate}
                                                : employeehistory
                    )                     
                }
        default:
                return state
    }
}

export default employeeHistoryReducer
