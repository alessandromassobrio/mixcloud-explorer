import React, { useReducer } from 'react';
import axios from 'axios';
import mixcloudContext from './mixcloudContext';
import MixcloudReducer from './mixcloudReducer';
import {
  SEARCH_CASTS,
  CLEAR_CASTS
} from '../types';

const MixcloudState = props => {
  const initialState = {
    casts: [],
  };

  const [state, dispatch] = useReducer(MixcloudReducer, initialState);

  // Search Casts
  const searchCasts = async text => {

    const res = await axios.get(
      `https://api.mixcloud.com/search/?q=${text}&type=cloudcast`
    );

    dispatch({
      type: SEARCH_CASTS,
      payload: res.data.data
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_CASTS });

  return (
    <mixcloudContext.Provider
      value={{
        casts: state.casts,
        searchCasts,
        clearUsers
      }}
    >
      {props.children}
    </mixcloudContext.Provider>
  );
};

export default MixcloudState;
