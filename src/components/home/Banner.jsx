import styled from 'styled-components';
const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  background-image: url(${props => props.imageSrc});
  background-size: 40%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  border: 1px solid black;
  overflow: hidden;
`;
const LeftContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1px #000000;
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
  -webkit-text-stroke: 1px #000000;
  letter-spacing: -20px;
  z-index: -1;
`;

const Title = styled.h2`
  font-size: 200px;
  font-weight: bold;
`;

const Banner = ({ imageSrc, titleLeft, titleRight }) => {
  return (
    <BannerSection imageSrc={imageSrc}>
      <LeftContentBox>
        <Title>{titleLeft}</Title>
      </LeftContentBox>

      <RightContentBox>
        <Title>{titleRight}</Title>
      </RightContentBox>
    </BannerSection>
  );
};

export default Banner;
