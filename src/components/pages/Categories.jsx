import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // 이미지 로딩

  const categories = [
    { title: "HOT 드로우", imageSrc: "https://i.pinimg.com/736x/b9/7e/7f/b97e7fcf01f683802fa0ebb51d05b696.jpg" },
    { title: "스타일 변신", imageSrc: "https://i.pinimg.com/236x/10/46/a2/1046a2f9ff7948ad059f0093f3d765cc.jpg" },
    { title: "트렌디 아이템", imageSrc: "https://i.pinimg.com/736x/48/9e/7d/489e7db5c1e07279cd0ede39d025b950.jpg" },
    { title: "TOP 30", imageSrc: "https://i.pinimg.com/236x/c6/f5/40/c6f540efadb63834f82d25589e4b3140.jpg" },
    { title: "주말 핫딜", imageSrc: "https://i.pinimg.com/736x/fc/b1/08/fcb108ad28642c7bf15c36f1f240413e.jpg" },
    { title: "신상", imageSrc: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/1/14/iyhcnzif9tdofay3v19z/dong" },
    { title: "든든한 야외 필수템", imageSrc: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/10/21/u9aojqkazx4laj2bucrz/sdf" },
    { title: "함께 해요", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4t1nTalbi31hXyR2j6Mpb8Ekgz95nNdSYw&s" },
    { title: "가성비 GOOD", imageSrc: "https://cdn.gamemeca.com/data_center/210/732/20200325120307.jpg" },
    { title: "스터디윗미", imageSrc: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2021/10/21/rqcb5zz3021ft5usgi2f/dsf" },
    { title: "뮤직 추천", imageSrc: "https://play-lh.googleusercontent.com/rzRzYiJO6CxCSCxmE6fq2uBeSR_TBYYIWWRQcnSoHxCj7tG7VAkoqaWHJPw3tg0A1YwQ=w526-h296-rw" },
    { title: "오늘의 대어?", imageSrc: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/GPWWHGL2FEX6CABSCO36ZM2N3I.jpg" },
    { title: "바다 속 작은 모험", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2pQrifO6lf18ZPquEcgBW38TDEkcNmZ0HA&s" },
    { title: "마당", imageSrc: "https://dw3nkyfm845lb.cloudfront.net/story/001/830/637786283018365624.jpg" },
    { title: "브런치 TIME", imageSrc: "https://images.kbench.com/kbench/article/2020_03/k208897p1n1.jpg" },
    { title: "불멍 아이템", imageSrc: "https://newsimg.sedaily.com/2020/05/08/1Z2O72CP0G_7.jpg" },
    { title: "주인공은 누구", imageSrc: "https://t3.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/vOi1mNqKtW6_B3HlBqgsdUa9jUk.jpg" },
    { title: "랜선 집들이", imageSrc: "https://dw3nkyfm845lb.cloudfront.net/story/001/830/637786232332928057.jpg" },
    { title: "힐링", imageSrc: "https://img.insight.co.kr/static/2020/03/27/700/gyq319lg4n9p61172yt3.jpg" },
    { title: "PARTY", imageSrc: "https://blog.kakaocdn.net/dn/wJ1f1/btrvK4LE0w7/1CWEPog4IvmSE7fLEkXEtk/img.jpg" },
  
  ];

  const itemsPerPage = 10; // 1페이지당 10개
  const totalSlides = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    return categories.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-5 gap-4">
          {getCurrentItems().map((category, index) => (
            <LazyLoad key={index} height={100} offset={100} once>
              <div className="relative p-2">
                <div className="flex flex-col items-center">
                  <link rel="preload" as="image" href={category.imageSrc} />
                  
                  <img
                    src={category.imageSrc}
                    alt={category.title}
                    className={`w-36 h-32 object-cover rounded-md mb-2 ${isLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setIsLoaded(true)}
                  />
                  {/* 이미지 로딩 중 Placeholder */}
                  {!isLoaded && (
                    <div className="w-36 h-32 bg-gray-300 animate-pulse rounded-md mb-2"></div>
                  )}
                  <p className="text-center text-xs font-medium truncate">{category.title}</p>
                </div>
              </div>
            </LazyLoad>
          ))}
        </div>

        <div className="moving-control flex justify-center items-center mt-4 space-x-8">
          {/* 이전 화살표 */}
          <button
            className={`arrow prev ${currentSlide === 0 ? 'opacity-50' : ''} lg:inline-block hidden`}
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="paginations flex space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`pagination h-2 w-2 rounded-full ${currentSlide === index ? 'bg-gray-900' : 'bg-gray-400'} lg:inline-block hidden`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* 다음 화살표 */}
          <button
            className={`arrow next ${currentSlide === totalSlides - 1 ? 'opacity-50' : ''} lg:inline-block hidden`}
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            <svg
              className="w-6 h-6 text-gray-400 hover:text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gategories;