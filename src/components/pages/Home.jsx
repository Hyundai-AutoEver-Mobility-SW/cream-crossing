import React from 'react';
import Hero from './Hero';
import Banner from './Banner'
import Banner2 from './Banner2'
import Categories from './Categories';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner />
      <Banner2 />
    </div>
  );
};

export default Home;
