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
  border: 2px solid black;
`;
const LeftContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  text-align: left;
  color: #000000;
  z-index: -1;
`;

const RightContentBox = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  text-align: right;
  color: #000000;
  z-index: -1;
`;

const Title = styled.h2`
  font-size: 150px;
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
