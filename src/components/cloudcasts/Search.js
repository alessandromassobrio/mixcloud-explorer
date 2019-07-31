import React, { useState, useContext } from 'react';
import MixcloudContext from '../../context/mixcloud/mixcloudContext';

const Search = () => {
  const mixcloudContext = useContext(MixcloudContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      // alertContext.setAlert('Please enter something', 'light');
    } else {
      mixcloudContext.searchCasts(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
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
      {mixcloudContext.casts.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={mixcloudContext.clearCasts}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
