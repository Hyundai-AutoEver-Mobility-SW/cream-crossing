import React from 'react';
import Hero from '../components/home/Hero';
import TopAnimal from '../components/home/TopAnimal';
import Banner from '../components/home/Banner';
import Banner2 from '../components/home/Banner2';
import Categories from '../components/home/Categories';

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
