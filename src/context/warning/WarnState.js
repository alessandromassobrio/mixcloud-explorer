import React, { useReducer } from 'react';
import warnContext from './warnContext';
import warnReducer from './warnReducer';
import { SET_WARNINGS, REMOVE_WARNINGS } from '../types';

const WarnState = props => {
    const initialState = null;
  
    const [state, dispatch] = useReducer(warnReducer, initialState);

    const setWarning = (message, type) => {
      dispatch({
        type: SET_WARNINGS,
        payload: { message, type }
      });

      setTimeout(() => dispatch({type: REMOVE_WARNINGS}), 5000);
    };
  
    return (
      <warnContext.Provider
        value={{
          warn: state,
          setWarning
        }}
      >
        {props.children}
      </warnContext.Provider>
    );
  };

export default WarnState;
