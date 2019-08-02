import {
  SEARCH_CASTS,
  CLEAR_CASTS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CASTS:
      return {
        ...state,
        casts: action.payload,
      };
    case CLEAR_CASTS:
      return {
        ...state,
        casts: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }; 
    default:
      return state;
  }
};
