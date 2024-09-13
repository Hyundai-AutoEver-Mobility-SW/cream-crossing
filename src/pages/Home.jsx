import Hero from '../components/home/Hero';
import TopAnimal from '../components/home/TopAnimal';
import Banner from '../components/home/Banner';
import Banner2 from '../components/home/Banner2';
import Categories from '../components/home/Categories';
import styled from 'styled-components';
import Products from '../\bcomponents/home/Products';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  background-color: #fff;
`;

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner />
      <TopAnimal />
      <Banner2 />
      {/*  */}
      <Container>
        <Products />
      </Container>
    </div>
  );
};

export default Home;
