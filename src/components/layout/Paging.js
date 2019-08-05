import React, { useContext } from 'react';
import mixcloudContext from '../../context/mixcloud/mixcloudContext';

const Paging = () => {
    const apiContext = useContext(mixcloudContext);

    return (
        <div>
            <button
            className='btn btn-light btn-block'
            style={{padding:'0'}}
            onClick={apiContext.getPaging}
            >
            More Results
            </button>
        </div>
    )
}

export default Paging;
