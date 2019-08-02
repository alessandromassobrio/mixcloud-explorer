import React, { useContext } from 'react';
import CastItem from './CastItem';
import Spinner from '../layout/Spinner';
import MixcloudContext from '../../context/mixcloud/mixcloudContext';

const Casts = () => {
  const mixcloudContext = useContext(MixcloudContext);

  const { loading, casts } = mixcloudContext;

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className='row'>
        {casts.map(tag => (
          <CastItem key={tag.key} cast={tag} />
        ))}
      </div>
    );
  }
};

export default Casts;
