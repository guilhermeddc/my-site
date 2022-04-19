import React from 'react';

import {About, Header, Portfolio} from './modules';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
    </>
  );
};

export default Home;
