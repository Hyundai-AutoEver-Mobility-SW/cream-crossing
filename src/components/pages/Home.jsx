import React from 'react';
import Hero from './Hero';
import TopAnimal from './TopAnimal';
import Banner from './Banner'
import Banner2 from './Banner2'
import Categories from './Categories';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner />
      <TopAnimal />
      <Banner2 />
    </div>
  );
};

export default Home;
