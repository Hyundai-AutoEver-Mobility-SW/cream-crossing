import React from 'react';
import LazyLoad from 'react-lazyload';

import img21 from '../../assets/animal/img21.webp';
import img22 from '../../assets/animal/img22.webp';
import img23 from '../../assets/animal/img23.webp';
import img24 from '../../assets/animal/img24.webp';
import img25 from '../../assets/animal/img25.webp';
import img26 from '../../assets/animal/img26.webp';
import img27 from '../../assets/animal/img27.webp';
import img28 from '../../assets/animal/img28.webp';
import img29 from '../../assets/animal/img29.webp';
import img30 from '../../assets/animal/img30.webp';
import img31 from '../../assets/animal/img31.webp';
import img32 from '../../assets/animal/img32.webp';
import img33 from '../../assets/animal/img33.webp';
import img34 from '../../assets/animal/img34.webp';
import img35 from '../../assets/animal/img35.webp';

const categories = [
  { title: 'Carmen', imageSrc: img21 },
  { title: 'Dotty', imageSrc: img22 },
  { title: 'Cole', imageSrc: img23 },
  { title: 'Agent S', imageSrc: img24 },
  { title: 'Tank', imageSrc: img25 },
  { title: 'Merengue', imageSrc: img26 },
  { title: 'Goose', imageSrc: img27 },
  { title: 'Rhonda', imageSrc: img28 },
  { title: 'Julian', imageSrc: img29 },
  { title: 'Muffy', imageSrc: img30 },
  { title: 'Tia', imageSrc: img31 },
  { title: 'Frita', imageSrc: img32 },
  { title: 'Shep', imageSrc: img33 },
  { title: 'Eunice', imageSrc: img34 },
  { title: 'Baabara', imageSrc: img35 },
];

const TopAnimal = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-2xl mb-1 font-bold">Top Animal</h2>
      <p className="text-lg text-gray-500 mb-6">인기 주민</p>
      <div className="grid grid-cols-5 gap-2">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <LazyLoad height={150} offset={100}>
              <img
                src={category.imageSrc}
                alt={category.title}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover rounded-md"
              />
            </LazyLoad>
            <p className="mt-2 text-sm font-medium text-center">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnimal;
