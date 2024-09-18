import Hero from '../components/home/Hero';
import TopAnimal from '../components/home/TopAnimal';
import Banner from '../components/home/Banner';
import Banner2 from '../components/home/Banner2';
import Categories from '../components/home/Categories';
import styled from 'styled-components';
import Products from '../components/home/Products';
import productsData from '../data/home/productsData';
import ProductInfinite from '../components/home/ProductInfinite';
import VisualSlide from '../components/home/VisualSlide';
import ShopSelectModal from '../components/common/ShopSelectModal';
const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  background-color: #fff;
`;

const Home = () => {
  return (
    <div>
      <ShopSelectModal />
      <Hero />
      <Categories />
      <Banner />
      <TopAnimal />
      <Banner2 />
      {/*  */}
      <Container>
        <VisualSlide />
        <Products title={productsData[0].title} subtitle={productsData[0].subtitle} />
        {/* <Products title={productsData[1].title} subtitle={productsData[1].subtitle} />
      <Products title={productsData[2].title} subtitle={productsData[2].subtitle} />
      <Products title={productsData[3].title} subtitle={productsData[3].subtitle} />
      <Products title={productsData[4].title} subtitle={productsData[4].subtitle} /> */}
        <ProductInfinite />
      </Container>
    </div>
  );
};

export default Home;
