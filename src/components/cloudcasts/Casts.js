import React, { useContext } from 'react';
import CastItem from './CastItem';
import Spinner from '../layout/Spinner';
// import Paging from '../layout/Paging';
import mixcloudContext from '../../context/mixcloud/mixcloudContext';

const Casts = () => {
  const apiContext = useContext(mixcloudContext);

  const { loading, casts } = apiContext;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className='row mt-1'>
        {casts.map(cast => (
          <CastItem key={cast.key} cast={cast} />
        ))}
          {/* <Paging pag={pages} /> */}
      </div>
    );
  }
};

export default Casts;
