import { UPDATE_RESUME_LANGUAGE } from '../../actionTypes'

    const intialState = {currentLanguage:'en'}

function languageReducer(state = intialState, action) { 
  if(action.type === UPDATE_RESUME_LANGUAGE){
    return {
      ...state,
      currentLanguage : action.payload.currentLanguage
    }
  }
    return state;
  };
  
  export default languageReducer;