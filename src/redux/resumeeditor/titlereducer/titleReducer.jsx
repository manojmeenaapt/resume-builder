import initialState from '../../initialState'
import { UPDATE_RESUME_TITLE } from '../../actionTypes'

function titleReducer(state = initialState, action) {
  if(action.type === UPDATE_RESUME_TITLE){
    return {
      ...state,
      title : action.payload.title
    }
  }
    return state;
  };
  
  export default titleReducer;