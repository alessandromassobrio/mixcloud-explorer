import React, { Fragment } from 'react';
import Search from '../cloudcasts/Search';
import Casts from '../cloudcasts/Casts';

const Home = () => (
  <Fragment>
    <Search />
    <Casts />
  </Fragment>
);

export default Home;
