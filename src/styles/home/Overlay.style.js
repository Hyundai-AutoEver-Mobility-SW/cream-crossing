import styled from 'styled-components';
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 1s ease;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-50px); /* 위로 살짝 이동하면서 사라지도록 */
  }
`;

export const BgVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const SkipBtn = styled.button`
  position: absolute;
  bottom: 20px;
  background-color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;
export const OverlayImage = styled.img`
  position: absolute;
  top: 0%;
  left: 25%;
  opacity: 0;
  transition:
    transform 1s ease-out,
    opacity 1s ease-out;
  animation: slideUp 1s ease forwards 2s;

  @keyframes slideUp {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
