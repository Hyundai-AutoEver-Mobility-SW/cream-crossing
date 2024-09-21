import styled from 'styled-components';
export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222a30;
  padding: 200px 0;
`;
export const GifImage = styled.img`
  width: 130px;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  background-color: #222a30;
  padding-top: 100px;
  padding-bottom: 300px;
  z-index: 0;
  position: relative;
`;
export const BackgroundText = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  text-align: center;
  color: rgba(255, 255, 255, 0.1);
  font-family: 'Bodoni Moda', serif;
  font-weight: 800;
  font-size: 180px;
  z-index: 3;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${({ rowCount }) => (rowCount === 2 ? '100px' : '0')};
  position: relative;
`;

export const Box = styled.div`
  cursor: pointer;
  background-color: #222a30;
  position: relative;
  width: 25%;
  height: 500px;
  border: 1px solid white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover {
    transform: scale(1.05) translateZ(5px);
    z-index: 1;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: ${({ top }) => top || '-20px'};
  right: ${({ right }) => right || '10px'};
  width: ${({ width }) => width || '70%'};
  height: ${({ height }) => height || '100%'};
  object-fit: contain;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
  color: white;
  font-size: 60px;
  line-height: 0.6;
  font-family: 'Bodoni Moda', serif;
`;
