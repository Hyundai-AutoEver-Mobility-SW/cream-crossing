import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 banner-img" src="src/assets/animal/banner1.webp" alt="First Banner" />
        <Carousel.Caption>
          <h3>
            ALL IN HDSHOP
            <br />
            모여봐요 동물의 숲
          </h3>
          <p>모든 것을 커스텀 한다.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 banner-img" src="src/assets/animal/banner6.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>
            추석맞이 슈퍼문 슈퍼세일
            <br />
            ~60% 할인 | ~20% 쿠폰
          </h3>
          <p>매일 오전 11시 쿠폰 & 드로우 오픈</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 banner-img" src="src/assets/animal/banner2.jpg" alt="Third Banner" />
        <Carousel.Caption>
          <h3>
            레고 거래량 TOP 100
            <br />
            리미티드 이벤트 정보
          </h3>
          <p>무인도로 이주</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
