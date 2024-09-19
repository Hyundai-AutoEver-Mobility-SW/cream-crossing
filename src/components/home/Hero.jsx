import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../../assets/banner/banner1.webp';
import hero2 from '../../assets/banner/banner12.jpg';
import hero3 from '../../assets/banner/banner28.jpg';

const PreviousArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Previous Slide"
    role="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-gray-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
    aria-label="Next Slide"
    role="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-gray-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="w-1.5 h-1.5 bg-gray-300 rounded-full transition-all duration-300"
        style={{ display: 'inline-block' }}
      />
    ),
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {/* 첫 번째 배너 */}
        <div className="relative">
          <img src={hero1} alt="First Banner" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-3xl font-bold">ALL IN HDSHOP</h3>
            <p>모여봐요 동물의 숲</p>
          </div>
        </div>

        {/* 두 번째 배너 */}
        <div className="relative">
          <img src={hero2} alt="Second Banner" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-3xl font-bold">추석맞이 슈퍼문 슈퍼세일</h3>
            <p>~60% 할인 | ~20% 쿠폰</p>
          </div>
        </div>

        {/* 세 번째 배너 */}
        <div className="relative">
          <img src={hero3} alt="Third Banner" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h3 className="text-3xl font-bold">레고 거래량 TOP 100</h3>
            <p>리미티드 이벤트 정보</p>
          </div>
        </div>
      </Slider>

      <style jsx>{`
        .slick-dots li.slick-active div {
          background-color: #4a5568;
        }
      `}</style>
    </div>
  );
};

export default Hero;
