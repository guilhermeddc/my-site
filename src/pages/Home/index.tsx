import React from 'react';

import {About, Header, Portfolio, Process, Prices, Contact} from './modules';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Process />
      <Prices />
      <Contact />
    </>
  );
};

export default Home;
