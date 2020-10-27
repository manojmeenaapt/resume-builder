import initialState from '../../initialState'
import { UPDATE_RESUME_LANGUAGE } from '../../actionTypes'

function titleReducer(state = initialState, action) {
  if(action.type === UPDATE_RESUME_LANGUAGE){
    return {
      ...state,
      language : action.payload.language
    }
  }
    return state;
  };
  
  export default titleReducer;