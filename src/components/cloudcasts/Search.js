import React, { useState, useContext } from 'react';
import mixcloudContext from '../../context/mixcloud/mixcloudContext';

const Cloudcasts = () => {
    const mcContext = useContext(mixcloudContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
      e.preventDefault();
      if (text === '') {
        console.log('Insert value');
      } else {
        mcContext.searchCloudcasts(text);
        setText('');
      }
    };
  
    const onChange = e => setText(e.target.value);

    return (
        <div className="col-lg-12">
            <form onSubmit={onSubmit} className='form'>
              <div className="form-group">
                  <input
                      type='text'
                      name='text'
                      placeholder='Search Cloudcasts...'
                      value={text}
                      onChange={onChange}
                      className='form-control'
                  />
                  <input
                      type='submit'
                      value='Search'
                      className='btn btn-dark btn-block mt-2'
                  />
              </div>
            </form>         
        </div>
    );
};

export default Cloudcasts;
