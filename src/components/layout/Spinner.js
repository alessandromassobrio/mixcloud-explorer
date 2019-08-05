import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => 
    <Fragment>
        <img src={spinner} alt='Loading results...' style={{width: '250px', margin: 'auto', display: 'block', marginTop: '6rem'}} />
    </Fragment>

export default Spinner;
