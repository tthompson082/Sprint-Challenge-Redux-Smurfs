/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED, ADD_SMURF, ADD_SUCCESS, ADD_FAILED } from '../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCHING_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: true
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: null
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: true
      }
    default:
      return state
  }
}