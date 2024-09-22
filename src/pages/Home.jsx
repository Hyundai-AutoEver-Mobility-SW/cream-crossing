import Hero from '../components/home/Hero';
import TopAnimal from '../components/home/TopAnimal';
import Banner from '../components/home/Banner';
import Banner2 from '../components/home/Banner2';
import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import productsData from '../data/home/productsData';
import ProductInfinite from '../components/home/ProductInfinite';
import VisualSlide from '../components/home/VisualSlide';
import HeroAltSection from '../components/home/HeroAltSection';
import ScrollToView from '../components/home/ScrollToView';
import * as S from '../styles/Home.style';
import BannerColor from '../components/home/BannerColor';
const Home = () => {
  return (
    <>
      <div>
        <div className="full-w">
          <HeroAltSection />
          {/* <Hero /> */}
          <ScrollToView />
        </div>
        <div className="full-w relative">
          <S.BackgroundText>CATEGORIES</S.BackgroundText>
        </div>
        <Categories />
        <div className="full-w">
          <Banner imageSrc={'/img/banner/banner01.png'} titleLeft="NEW SPCIEAL" titleRight="ARRIVAL SALE" />
        </div>
        <Products title={productsData[0].title} subtitle={productsData[0].subtitle} />
        <TopAnimal />
        <div className="full-w">
          <BannerColor
            color="blue"
            imageSrc={'/img/banner/banner02.png'}
            titleLeft="MOST POPULAR"
            titleRight="SPCIEAL POPULAR"
          />
        </div>
        <Products title={productsData[1].title} subtitle={productsData[1].subtitle} />
        <div className="full-w">
          <VisualSlide />
        </div>
        <Products title={productsData[2].title} subtitle={productsData[2].subtitle} />
        <div className="full-w">
          <Banner imageSrc={'/img/banner/banner03.png'} titleLeft="NEW SPCIEAL" titleRight="ARRIVAL SALE" />
        </div>
        <Products title={productsData[3].title} subtitle={productsData[3].subtitle} />
        <div className="full-w">
          <BannerColor imageSrc={'/img/banner/banner05.png'} titleLeft="MOST POPULAR" titleRight="SPCIEAL POPULAR" />
        </div>
        <Products title={productsData[4].title} subtitle={productsData[4].subtitle} />
        <ProductInfinite />
      </div>
    </>
  );
};

export default Home;
