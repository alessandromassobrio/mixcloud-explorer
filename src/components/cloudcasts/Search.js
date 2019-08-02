import React, { useState, useContext } from 'react';
import MixcloudContext from '../../context/mixcloud/mixcloudContext';
import WarnContext from '../../context/warning/warnContext';

const Search = () => {
  const mixcloudContext = useContext(MixcloudContext);
  const warnContext = useContext(WarnContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      warnContext.setWarning('Please enter an artist name, a genre or a title', 'warning');
    } 
    else {
      mixcloudContext.searchCasts(text);
      setText('');
      // TODO: component
      mixcloudContext.getPaging();
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form my-3'>
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
