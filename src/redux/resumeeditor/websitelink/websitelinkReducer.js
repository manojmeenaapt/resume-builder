import {
    Add_WEBSITE_LINK_BOX,
    DELETE_WEBSITE_LINK_BOX,
    UPDATE_LABEL,
    UDPATE_LINK,
} from '../../actionTypes.jsx'

const initialState = {
        website_link:[],
}



function websiteLinkReducer(state = initialState, action){

    switch (action.type) {
        case Add_WEBSITE_LINK_BOX : 
                        return {
                            ...state,
                            website_link: [...state.website_link, {"label":'',"link":'', "key":action.payload.number }] 
                        }
        case DELETE_WEBSITE_LINK_BOX : 
            return {
                ...state,
                website_link: state.website_link.filter(item => item.key !== action.payload.number)                     
            }
        case UPDATE_LABEL : 
        return {
            ...state,
            website_link: state.website_link.map(
                (website_link, i) => website_link.key === action.payload.number ? {...website_link, label: action.payload.label}
                                        : website_link
            )                     
        }
        case UDPATE_LINK : 
                return {
                    ...state,
                    website_link: state.website_link.map(
                        (website_link, i) => website_link.key === action.payload.number ? {...website_link, link: action.payload.link}
                                                : website_link
                    )                     
                    }
        default:
                return state
    }
}

export default websiteLinkReducer
