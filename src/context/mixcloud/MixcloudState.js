import React, { useReducer } from 'react';
import axios from 'axios';
import mixcloudContext from './mixcloudContext';
import mixcloudReducer from './mixcloudReducer';
import {
  SEARCH_CASTS,
  GET_CAST,
  CLEAR_CASTS,
  SET_LOADING,
  GET_PAGING
} from '../types';

const MixcloudState = props => {
  const initialState = {
    casts: [],
    cast: {},
    pages: [],
    loading: false
  };

  const [state, dispatch] = useReducer(mixcloudReducer, initialState);
  
  // Search Casts
  const limit = 100;
  const offset = 0;

  const searchCasts = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.mixcloud.com/search/?limit=${limit}&offset=${offset}&q=${text}&type=cloudcast`
    );

    dispatch({
      type: SEARCH_CASTS,
      payload: res.data.data
    });
  };

  // Get Cast
  const getCast = async (username, slug) => {
    setLoading();

    const res = await axios.get(
    `https://api.mixcloud.com/${username}/${slug}/`
    );

    dispatch({
      type: GET_CAST,
      payload: res.data
    });
  };

  // Get Paging (only gets native url and params)
  const getPaging = async text => {

    const res = await axios.get(
      `https://api.mixcloud.com/search/?q=${text}&type=cloudcast`
      );

      dispatch({
        type: GET_PAGING,
        payload: res.data.paging
      });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING});

  // Clear Casts
  const clearCasts = () => dispatch({ type: CLEAR_CASTS });

  return (
    <mixcloudContext.Provider
      value={{
        casts: state.casts,
        cast: state.cast,
        loading: state.loading,
        pages: state.pages,
        searchCasts,
        getCast,
        clearCasts,
        getPaging
      }}
    >
      {props.children}
    </mixcloudContext.Provider>
  );
};

export default MixcloudState;
