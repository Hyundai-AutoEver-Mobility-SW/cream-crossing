import * as S from './Products.style';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Products() {
  const arrTmp = [1, 2, 3, 4, 5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <S.ProductWrap>
        <div className="product-text-wrap">
          <div className="title-wrap">
            <div className="title">Most Popular</div>
            <div className="subtitle">인기 상품</div>
          </div>
        </div>
        <div className="product-list-wrap">
          <Slider {...settings} className="product-list">
            {arrTmp.map((item, i) => (
              <div key={i} className="product-item">
                <div className="item-img">
                  <img src="/img59.webp" alt="" />
                  <div className="wish-btn">
                    <IoBookmarkOutline className="text-2xl" />
                    {/* <IoBookmark className="text-2xl" /> */}
                  </div>
                </div>
                <div className="info-box">
                  <div className="name">Stussy</div>
                  <div className="desc">Stussy Brushed Out Stock Skullcap Beanie Brown</div>
                  <div className="price">99,000원</div>
                  <div className="price-desc">즉시 구매가</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="more-wrap">
          <div className="more-btn">더보기</div>
        </div>
      </S.ProductWrap>
    </>
  );
}

export default Products;
