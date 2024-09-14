import * as S from './Products.style';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import generateProductsDetailData from '../../data/home/productsDetailData';
function Products({ title, subtitle }) {
  // const { favorites, setFavorites } = useState([]);
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
  const [products, setProducts] = useState(generateProductsDetailData(0, 10));
  const handleFavorite = id => {
    // todo
  };
  useEffect(() => {}, []);

  return (
    <>
      <S.ProductWrap>
        <div className="product-text-wrap">
          <div className="title-wrap">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <div className="product-list-wrap">
          <Slider {...settings} className="product-list">
            {products.map((item, i) => (
              <div key={i} className="product-item">
                <div className="item-img">
                  <img src={item.img_src} alt="" />
                  <div className="trade-amount">{item.trade_amount}</div>
                  <div className="wish-btn">
                    <IoBookmarkOutline onClick={handleFavorite} className="text-2xl cursor-pointer" />
                    {/* <IoBookmark className="text-2xl" /> */}
                  </div>
                </div>
                <div className="info-box">
                  <div className="name">{item.name}</div>
                  <div className="desc" style={{ backgroundColor: item.color }}>
                    {item.desc}
                  </div>
                  <div className="tags" style={{ color: item.color }}>
                    {' '}
                    {item.tags}
                  </div>
                  <div className="price">{item.price}</div>
                  <div className="price-desc">{item.price_desc}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="more-wrap">
          <div className="more-btn cursor-pointer">더보기</div>
        </div>
      </S.ProductWrap>
    </>
  );
}

export default Products;
