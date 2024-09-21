import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 150px 0;
`;
const Image = styled.img`
  width: 300%; /* 이미지가 슬라이더의 너비보다 더 크도록 설정 */
  height: auto;
`;
function VisualSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 20000, // 슬라이드 이동 속도
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    rtl: false,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <Image src="/img/visual_slide_bg.png" alt="Slide Image" />
        </div>
        <div>
          <Image src="/img/visual_slide_bg.png" alt="Slide Image" />
        </div>
        <div>
          <Image src="/img/visual_slide_bg.png" alt="Slide Image" />
        </div>
      </Slider>
    </SliderWrapper>
  );
}

export default VisualSlide;
