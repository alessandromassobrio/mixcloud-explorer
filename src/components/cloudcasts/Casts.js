import React, { useContext } from 'react';
import CastItem from './CastItem';
import MixcloudContext from '../../context/mixcloud/mixcloudContext';

const Casts = () => {
  const mixcloudContext = useContext(MixcloudContext);

  const { casts } = mixcloudContext;

  return (
    <div style={thisStyle}>
      {casts.map(tag => (
        <CastItem key={tag.key} user={tag} />
      ))}
    </div>
  );
};

const thisStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Casts;
