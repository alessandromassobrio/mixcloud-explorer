import React, { useContext } from 'react';
import WarnContext from '../../context/warning/warnContext';

const Warning = () => {
    const warncontext = useContext(WarnContext);

    const { warn } = warncontext;

    return (
        warn != null &&
        <div className={`alert alert-${warn.type}`}>
        <i className='fas fa-info-circle' /> {warn.message}
      </div>
    )
}

export default Warning;
