import styled from 'styled-components';
const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;

  /* background-color: rgba(0, 145, 255, 0.3); */
  /* background-color: rgba(255, 115, 0, 0.3); */
  background-color: ${props => (props.color === 'blue' ? 'rgba(0, 145, 255, 0.3)' : 'rgba(255, 115, 0, 0.3)')};
  background-image: url(${props => props.imageSrc});
  background-size: 40%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
  border: 1px solid #222a30;
`;
const LeftContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1px #222a30;
  letter-spacing: -20px;
  z-index: -1;
`;

const RightContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  text-align: right;
  color: transparent;
  -webkit-text-stroke: 1px #222a30;
  letter-spacing: -20px;
  z-index: -1;
`;

const Title = styled.h2`
  font-size: 200px;
  font-weight: bold;
`;

const BannerGray = ({ imageSrc, titleLeft, titleRight, color }) => {
  return (
    <BannerSection imageSrc={imageSrc} color={color}>
      <LeftContentBox>
        <Title>{titleLeft}</Title>
      </LeftContentBox>

      <RightContentBox>
        <Title>{titleRight}</Title>
      </RightContentBox>
    </BannerSection>
  );
};

export default BannerGray;
