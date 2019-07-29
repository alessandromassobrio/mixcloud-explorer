import React, { useReducer } from 'react';
import axios from 'axios';
import mixcloudContext from './mixcloudContext';
import mixcloudReducer from './mixcloudReducer';
import { 
    SEARCH_CLOUDCASTS
 } from '../types';

 const searchType = {
    cloudcast: 'cloudcast'
}
 
 const MixcloudState = props => {
     const initialState = {
         users: []
     };

     const [state, dispatch] = useReducer(mixcloudReducer, initialState);

     // Fetch Cloudcast Tags
     const searchCloudcasts = async text => {
        const rsp = await axios.get(
            `https://api.mixcloud.com/search/?q=${text}&type=${searchType.cloudcast}`
            );

        dispatch({
            type: SEARCH_CLOUDCASTS,
            payload: rsp.data
        });

        console.log(rsp.data)
     };

     return (
        <mixcloudContext.Provider
            value={{
                users: state.users,
                searchCloudcasts
            }}
        >
            {props.children}
        </mixcloudContext.Provider>
     );
 };

 export default MixcloudState;