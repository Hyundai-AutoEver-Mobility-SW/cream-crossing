import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/animal/img1.webp';
import img2 from '../../assets/animal/img2.webp'; 
import img3 from '../../assets/animal/img3.webp';
import img4 from '../../assets/animal/img4.webp';
import img5 from '../../assets/animal/img5.webp';
import img6 from '../../assets/animal/img6.webp';
import img7 from '../../assets/animal/img7.webp';
import img8 from '../../assets/animal/img8.webp';
import img9 from '../../assets/animal/img9.webp';
import img10 from '../../assets/animal/img10.webp';
import img11 from '../../assets/animal/img11.webp';
import img12 from '../../assets/animal/img12.webp';
import img13 from '../../assets/animal/img13.webp';
import img14 from '../../assets/animal/img14.webp';
import img15 from '../../assets/animal/img15.webp';
import img16 from '../../assets/animal/img16.webp';
import img17 from '../../assets/animal/img17.webp';
import img18 from '../../assets/animal/img18.webp';
import img19 from '../../assets/animal/img19.webp';
import img20 from '../../assets/animal/img20.webp';

const Gategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { title: "HOT 드로우", imageSrc: img1 },
    { title: "남성 추천", imageSrc: img2 },
    { title: "여성 추천", imageSrc: img3 },
    { title: "색다른 추천", imageSrc: img4 },
    { title: "TOP 10", imageSrc: img5 },
    { title: "정가 아래", imageSrc: img6 },
    { title: "든든한 가을 필수템", imageSrc: img7 },
    { title: "구해요", imageSrc: img8 },
    { title: "20만원대", imageSrc: img9 },
    { title: "신상", imageSrc: img10 },
    { title: "GATEGORY1", imageSrc: img11 },
    { title: "GATEGORY2", imageSrc: img12 },
    { title: "GATEGORY3", imageSrc: img13 },
    { title: "GATEGORY4", imageSrc: img14 },
    { title: "GATEGORY5", imageSrc: img15 },
    { title: "GATEGORY6", imageSrc: img16 },
    { title: "GATEGORY7", imageSrc: img17 },
    { title: "GATEGORY8", imageSrc: img18 },
    { title: "GATEGORY9", imageSrc: img19 },
    { title: "GATEGORY10", imageSrc: img20 },
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
        {/* 슬라이드의 항목을 5개씩 2줄로 표시 */}
        <div className="grid grid-cols-5 gap-">
          {getCurrentItems().map((category, index) => (
            <div key={index} className="relative p-2">
              <div className="flex flex-col items-center">
                <img
                  src={category.imageSrc}
                  alt={category.title}
                  className="w-36 h-32 object-cover rounded-md mb-2"
                />
                <p className="text-center text-xs font-medium truncate">{category.title}</p>
              </div>
            </div>
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