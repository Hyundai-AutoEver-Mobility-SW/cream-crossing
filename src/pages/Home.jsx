import Hero from '../components/home/Hero';
import TopAnimal from '../components/home/TopAnimal';
import Banner from '../components/home/Banner';
import Banner2 from '../components/home/Banner2';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import productsData from '../data/home/productsData';
import ProductInfinite from '../components/home/ProductInfinite';
import VisualSlide from '../components/home/VisualSlide';
const Home = () => {
  return (
    <div>
      <Hero className="max-container" />
      <Categories />
      <Products title={productsData[0].title} subtitle={productsData[0].subtitle} />
      <TopAnimal />
      <Banner />
      <Products title={productsData[1].title} subtitle={productsData[1].subtitle} />
      <VisualSlide />
      <Products title={productsData[2].title} subtitle={productsData[2].subtitle} />
      <Banner2 />
      <Products title={productsData[3].title} subtitle={productsData[3].subtitle} />
      <Banner2 />
      <Products title={productsData[4].title} subtitle={productsData[4].subtitle} />
      <ProductInfinite />
    </div>
  );
};

export default Home;
