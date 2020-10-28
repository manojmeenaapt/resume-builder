import {
    UPDATE_JOB_TITLE,
    UDPATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_EMAIL,
    UPDATE_PHONE,
    UPDATE_COUNTRY,
    UPDATE_CITY,
    UPDATE_ADDRESS,
    UDPATE_POSTAL_CODE,
    UPDATE_DRIVING_LICENSE,
    UPDATE_PLACE_OF_BIRTH,
    UPDATE_DOB,
    UDPATE_NATIONALITY
} from '../../actionTypes.jsx'

const initialState = {
        jobtitle:'',
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        country:'',
        city:'',
        address:'',
        postalcode:'',
        drivinglicense:'',
        nationality:'',
        placeofbirth:'',
        dob:''
}



function personalDetailReducer(state = initialState, action){

    switch (action.type) {
        case UPDATE_JOB_TITLE : 
                        return {
                            ...state,
                            jobtitle:action.payload.jobtitle
                        }
        case UDPATE_FIRST_NAME : 
                            return {
                                ...state,
                                firstname:action.payload.firstname
                            }
        case UPDATE_LAST_NAME: 
                return {
                    ...state,
                    lastname:action.payload.lastname
                }
        
        case UPDATE_EMAIL : 
                return {
                    ...state ,
                    email:action.payload.email
                }
        case UPDATE_PHONE:
                return {
                    ...state ,
                    phone:action.payload.phone
                }
        case UPDATE_COUNTRY : 
                return {
                    ...state ,
                    country:action.payload.country
                }
        case UPDATE_CITY:
                return {
                    ...state ,
                    city:action.payload.city
                }
        case UPDATE_ADDRESS:
                return {
                    ...state ,
                    address:action.payload.address
                }
        case UDPATE_POSTAL_CODE:
                return {
                    ...state ,
                    postalcode:action.payload.postalcode
                }
        case UPDATE_DRIVING_LICENSE:
                return{
                    ...state ,
                    drivinglicense:action.payload.drivinglicense
                }
        case UPDATE_PLACE_OF_BIRTH:
                return{
                    ...state ,
                    placeofbirth:action.payload.placeofbirth
                }
        case UPDATE_DOB:
                return {
                    ...state ,
                    dob:action.payload.dob
                }
        case UDPATE_NATIONALITY : 
        return {
            ...state ,
            nationality:action.payload.nationality
        }

        default:
                return state
    }
}

export default personalDetailReducer
