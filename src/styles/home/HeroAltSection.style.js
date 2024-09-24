import styled, { keyframes } from 'styled-components';

const slideTop = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const slideBottom = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const fadeOut = `
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = `
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const HeroAltSectionWrap = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ImageWrap = styled.div`
  z-index: 2;
`;

export const Image = styled.img`
  height: 90vh;
  object-fit: cover;
  opacity: 1;
  &.fade {
    animation: fadeOutAnimation 1s ease-in-out forwards; /* 페이드 아웃 애니메이션 */
  }

  &.show {
    animation: fadeInAnimation 1s ease-in-out forwards; /* 페이드 인 애니메이션 */
  }

  @keyframes fadeOutAnimation {
    ${fadeOut}
  }

  @keyframes fadeInAnimation {
    ${fadeIn}
  }
`;

export const SlidingTextWrapTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  overflow: hidden;
`;
export const SlidingTextWrapBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 1;
`;

export const SlidingTextTop = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-family: 'Bodoni Moda', serif;
  font-weight: 800;
  font-size: 200px;
  line-height: 1;
  animation: ${slideTop} 100s linear infinite;
  color: #000;
`;
export const SlidingTextBottom = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-family: 'Bodoni Moda', serif;
  font-weight: 800;
  font-size: 200px;
  line-height: 1;
  animation: ${slideBottom} 100s linear infinite;
  color: #000;
`;
