import React, { useState, useContext } from 'react';
import mixcloudContext from '../../context/mixcloud/mixcloudContext';
import warnContext from '../../context/warning/warnContext';

const Search = () => {
  const apiContext = useContext(mixcloudContext);
  const msgContext = useContext(warnContext);

  const [text, setText, loading] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      msgContext.setWarning('Please enter an artist name, a genre or a title', 'warning');
    } else {
      apiContext.searchCasts(text);
      setText('');
      
      // Gets only the 'next' url
      apiContext.getPaging(text);
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form mt-3'>
        <input
          type='text'
          name='text'
          placeholder='Search Cloudcasts...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {apiContext.casts.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={apiContext.clearCasts}
          style={{padding:'0'}}
        >
        Clear
        </button>
      )}
      {apiContext.loading === false && (
        <small 
        className='infotext center-align 
        show-on-medium-and-down
        hide-on-large-only
        grey-text
        text-lighten-0
        mt-2'
        >
        Mixcloud Explorer - App v. 1.0.0 - ©alessandro massobrio
        </small>
      )}
    </div>
  );
};

export default Search;
