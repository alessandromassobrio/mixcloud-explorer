import { SET_WARNINGS, REMOVE_WARNINGS } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_WARNINGS:
            return action.payload;
        case REMOVE_WARNINGS:
            return null;
        default:
            return state;
    }
};