import {
  SEARCH_CASTS,
  CLEAR_CASTS
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
    default:
      return state;
  }
};
