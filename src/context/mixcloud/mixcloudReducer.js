import {
    SEARCH_CLOUDCASTS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_CLOUDCASTS:
            return {
                ...state,
                cloudcasts: action.payload,
            }; 
        default:
            return state; 
    }
};