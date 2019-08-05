import {
  SEARCH_CASTS,
  GET_CAST,
  CLEAR_CASTS,
  SET_LOADING,
  GET_PAGING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CASTS:
      return {
        ...state,
        casts: action.payload,
        loading: false
      };
    case GET_CAST:
      return {
        ...state,
        cast: action.payload,
        loading: false
      }; 
    case CLEAR_CASTS:
      return {
        ...state,
        casts: [],
        loading: false
      };
    case GET_PAGING:
      return {
        ...state,
        pages: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };   
    default:
      return state;
  }
};
