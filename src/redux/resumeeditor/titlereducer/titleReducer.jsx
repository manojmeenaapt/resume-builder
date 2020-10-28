import { UPDATE_RESUME_TITLE } from '../../actionTypes'

const intialState = {title:'name of resume title'}


function titleReducer(state = intialState, action) {
  if(action.type === UPDATE_RESUME_TITLE){
    return {
      ...state,
      title : action.payload.title
    }
  }
    return state;
  };
  
  export default titleReducer;