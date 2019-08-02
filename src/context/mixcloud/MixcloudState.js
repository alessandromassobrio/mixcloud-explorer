import React, { useReducer } from 'react';
import axios from 'axios';
import mixcloudContext from './mixcloudContext';
import MixcloudReducer from './mixcloudReducer';
import {
  SEARCH_CASTS,
  CLEAR_CASTS,
  SET_LOADING,
  GET_PAGING
} from '../types';

const MixcloudState = props => {
  const initialState = {
    casts: [],
  };

  const [state, dispatch] = useReducer(MixcloudReducer, initialState);

  // Search Casts
  const searchCasts = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.mixcloud.com/search/?q=${text}&type=cloudcast`
    );

    dispatch({
      type: SEARCH_CASTS,
      payload: res.data.data,
    });
  };

  // Get Paging
  // TODO: Paging component
  const getPaging = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.mixcloud.com/search/?q=${text}&type=cloudcast`
      );

      dispatch({
        type: GET_PAGING,
        payload: res.data.paging
      });
      console.log(res.data.paging)
  };

  // Set Loading
  const setLoading = () => dispatch({ loading: SET_LOADING});

  // Clear Casts
  const clearCasts = () => dispatch({ type: CLEAR_CASTS });

  return (
    <mixcloudContext.Provider
      value={{
        casts: state.casts,
        searchCasts,
        clearCasts,
        loading: state.loading,
        getPaging
      }}
    >
      {props.children}
    </mixcloudContext.Provider>
  );
};

export default MixcloudState;
