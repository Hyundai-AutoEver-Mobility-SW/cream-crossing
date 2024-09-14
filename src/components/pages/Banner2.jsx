import React from 'react';
import bannerImage from '../../assets/animal/banner4.jpg';

const Banner2 = () => {
  return (
    <section className="relative w-full h-[400px] my-8">
      <img 
        src={bannerImage} 
        alt="Banner 1" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-3xl font-bold">동물의 숲</h2>
        <p className="mt-2 text-lg">BIG SALE</p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          지금 구매하기
        </button>
      </div>
    </section>
  );
};

export default Banner2;
