import { useEffect, useState } from 'react';
import * as S from '../../styles/home/HeroAltSection.style';

function HeroAltSection() {
  const images = ['/img/hero1.png', '/img/hero2.png', '/img/hero3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);
  return (
    <S.HeroAltSectionWrap>
      <S.SlidingTextWrapTop>
        <S.SlidingTextTop>EXPLORE A SOFT AND WARM CROSSROADS </S.SlidingTextTop>
        <S.SlidingTextTop>EXPLORE A SOFT AND WARM CROSSROADS </S.SlidingTextTop>
      </S.SlidingTextWrapTop>
      <S.ImageWrap>
        <S.Image className={isAnimating ? 'fade' : 'show'} src={images[currentImageIndex]} alt="Centered PNG" />
      </S.ImageWrap>
      <S.SlidingTextWrapBottom>
        <S.SlidingTextBottom>MEET YOUR ANIMAL CROSSING FRIENDS ON THE SITE </S.SlidingTextBottom>
        <S.SlidingTextBottom>MEET YOUR ANIMAL CROSSING FRIENDS ON THE SITE</S.SlidingTextBottom>
      </S.SlidingTextWrapBottom>
    </S.HeroAltSectionWrap>
  );
}

export default HeroAltSection;
