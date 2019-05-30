// import { combineReducers } from 'redux'
import initialState from '../state'

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case "MY_MOVIE_LIST_LOADED":
      return {
      ...state,
      myMovieList: action.value
    }
    case "SEARCH_RESULTS_LOADED":
      return {
      ...state,
      searchResults: action.value
    };
    default: 
      return state
  }
}

export default rootReducer