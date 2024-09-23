import { useEffect, useRef, useState } from 'react';
import * as S from './ProductDetail.style';
import { throttle } from 'lodash';
import { useParams } from 'react-router-dom';
import ProductInfinite from '../../components/home/ProductInfinite';
import mockData from '../../data/home/mockData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';

export const ProductDetail = () => {
  const { id } = useParams(); // URL 파라미터 값 가져오기
  // 라우팅에서 URL 파라미터로 받은 값을 설정해야 함, 다른 걸로 하면 못 가져옴
  const [imgPosY, setImgPosY] = useState(0);
  const mainImgFooterRef = useRef(null);
  const scrollFooterRef = useRef(null);
  const dispatch = useDispatch();
  const product = mockData.find(item => item.id === Number(id));

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // 장바구니 추가하는 액션 디스패치
    console.log(product, '장바구니에 추가되었습니다.');
  };

  const checkIntersection = throttle(() => {
    if (!mainImgFooterRef && !scrollFooterRef) return;

    const rect1 = mainImgFooterRef.current.getBoundingClientRect();
    const rect2 = scrollFooterRef.current.getBoundingClientRect();

    if (imgPosY === 0 && rect1.bottom >= rect2.bottom) {
      console.log(imgPosY, rect1.bottom, rect2.bottom);
      setImgPosY(rect1.bottom);
    } else if (imgPosY && imgPosY < rect2.bottom) setImgPosY(0);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', checkIntersection);

    return () => {
      window.removeEventListener('scroll', checkIntersection);
    };
  }, [checkIntersection]);
  // const title = '나이키 에어맥스 2090';
  // const desc = 'Nike Air Max 2090';
  // const imgSrc = getImgSrc(Number(num) + 1);
  // const buyPrice = getPrice(Number(num) * 1000);
  // const sellPrice = getPrice(Number(num) * 1000 * 0.8);
  const title = product.name;
  const desc = product.tags;
  const imgSrc = product.imgSrc;
  const recentPrice = product.price * 0.7;
  const startPrice = product.price * 0.5;
  const buyPrice = product.price;
  const sellPrice = product.price * 0.8;
  return (
    <S.ProductDetailWrapper>
      <S.ContentWrapper>
        <S.MainWrapper>
          <S.MainLeft $imgPosY={imgPosY}>
            <S.ImgWrapper>
              <S.Img src={imgSrc} ref={mainImgFooterRef} />
            </S.ImgWrapper>
          </S.MainLeft>
          <S.MainRight>
            <S.PriceWrapper>
              <S.PriceTitle>즉시 구매가</S.PriceTitle>
              <S.PriceValue>{buyPrice.toLocaleString()}원</S.PriceValue>
            </S.PriceWrapper>
            <S.TitleWrapper>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{desc}</S.SubTitle>
            </S.TitleWrapper>
            <S.SizeButton>
              <S.ButtonTitle>모든 사이즈</S.ButtonTitle>
              <S.DropDownIcon src="https://seekicon.com/free-icon-download/arrow-dropdown_2.svg" />
            </S.SizeButton>
            <S.ProductInfoWrapper>
              <S.ProductInfoItem $first={'first'}>
                <S.ProductInfoTitle>최근 거래가</S.ProductInfoTitle>
                <S.ProductInfoValue>{recentPrice.toLocaleString()}원</S.ProductInfoValue>
              </S.ProductInfoItem>
              <S.ProductInfoItem>
                <S.ProductInfoTitle>발매가</S.ProductInfoTitle>
                <S.ProductInfoValue>{startPrice.toLocaleString()}원</S.ProductInfoValue>
              </S.ProductInfoItem>
              <S.ProductInfoItem>
                <S.ProductInfoTitle>모델번호</S.ProductInfoTitle>
                <S.ProductInfoValue>JW0109</S.ProductInfoValue>
              </S.ProductInfoItem>
              <S.ProductInfoItem>
                <S.ProductInfoTitle>출시일</S.ProductInfoTitle>
                <S.ProductInfoValue>-</S.ProductInfoValue>
              </S.ProductInfoItem>
              <S.ProductInfoItem>
                <S.ProductInfoTitle>대표색상</S.ProductInfoTitle>
                <S.ProductInfoValue>Wonder White</S.ProductInfoValue>
              </S.ProductInfoItem>
            </S.ProductInfoWrapper>
            <S.ColorButtonWrapper>
              <S.ColorButton $color={'red'}>
                <S.ColorButtonTitle>구매</S.ColorButtonTitle>
                <S.ColorButtonPrice>{buyPrice.toLocaleString()}원</S.ColorButtonPrice>
              </S.ColorButton>
              <S.ColorButton $color={'green'}>
                <S.ColorButtonTitle>판매</S.ColorButtonTitle>
                <S.ColorButtonPrice>{sellPrice.toLocaleString()}원</S.ColorButtonPrice>
              </S.ColorButton>
            </S.ColorButtonWrapper>
            <S.CartButton onClick={handleAddToCart}>장바구니</S.CartButton>
            <S.BenefitWrapper>
              <S.BenefitTitleWrapper>
                <S.BenefitTitle>추가 혜택</S.BenefitTitle>
                <S.BenefitMoreView>더보기</S.BenefitMoreView>
              </S.BenefitTitleWrapper>
              <S.BenefitInfoWrapper>
                <S.BenefitInfoTitle>포인트</S.BenefitInfoTitle>
                <S.BenefitInfoContent>토스페이 생애 첫 결제시 토스포인트 2천원 즉시적립</S.BenefitInfoContent>
              </S.BenefitInfoWrapper>
              <S.BenefitInfoWrapper>
                <S.BenefitInfoTitle>결제</S.BenefitInfoTitle>
                <S.BenefitInfoContent>현금 결제시 5% 할인</S.BenefitInfoContent>
              </S.BenefitInfoWrapper>
            </S.BenefitWrapper>
            <S.DeliveryWrapper>
              <S.DeliveryTitle>배송 정보</S.DeliveryTitle>
              <S.DeliveryInfoWrapper>
                <S.DeliveryImgWrapper>
                  <S.DeliveryImg src="https://ifh.cc/g/mBpmo6.png" />
                </S.DeliveryImgWrapper>
                <S.DeliveryInfoTitle>일반배송</S.DeliveryInfoTitle>
                <S.DeliveryInfoSub>3,000원</S.DeliveryInfoSub>
              </S.DeliveryInfoWrapper>
              <S.DeliveryInfoWrapper>
                <S.DeliveryImgWrapper>
                  <S.DeliveryImg src="https://ifh.cc/g/NhO5F2.png" />
                </S.DeliveryImgWrapper>
                <S.DeliveryInfo>
                  <div>
                    <S.DeliveryInfoTitle>당일배송</S.DeliveryInfoTitle>
                    <S.DeliveryInfoSub>5,000원</S.DeliveryInfoSub>
                  </div>
                  <S.DeliveryInfoExcept>제주 및 도서산간 또는 특정 지역 서비스 제공 불가</S.DeliveryInfoExcept>
                </S.DeliveryInfo>
              </S.DeliveryInfoWrapper>
            </S.DeliveryWrapper>
            <S.AdBanner>
              <S.AdImg src="https://www.nintendo.co.kr/switch/acbaa/assets/images/top/banner_01.png" />
              <S.AdImg src="https://www.nintendo.co.kr/switch/acbaa/assets/images/top/set_btn__pc_on.png" />
            </S.AdBanner>
          </S.MainRight>
          <S.ScrollFooter ref={scrollFooterRef} />
        </S.MainWrapper>
        <S.RecommendWrapper>
          <S.RecommendTitle>추천 상품</S.RecommendTitle>
          <S.RecommendItemWrapper>
            <S.RecommendItem>
              <S.RecommendImg src="https://images.ctfassets.net/sjvy5j5nlcjk/7001000006869018089291106f11ee9c10c1c11cc53fba/e4018768531cf9056e5bd35d1b6e464b/67e1afb7ae3ea59e84b4e4330d1ac02521c7af3cd541f1f036f7f71c65e3bf03.jpg?w=320&fm=webp" />
              <S.RecommendItemTitle>슈퍼 마리오브라더스 원더</S.RecommendItemTitle>
              <S.RecommendItemPrice>35,000원</S.RecommendItemPrice>
            </S.RecommendItem>
            <S.RecommendItem>
              <S.RecommendImg src="https://images.ctfassets.net/sjvy5j5nlcjk/5e4mqwfnECRkCrY7ZAH25M/81fc7a25e94ab4696e2885164ab35008/01-01.jpg?w=320&fm=webp" />
              <S.RecommendItemTitle>젤다의 전설</S.RecommendItemTitle>
              <S.RecommendItemPrice>45,000원</S.RecommendItemPrice>
            </S.RecommendItem>
            <S.RecommendItem>
              <S.RecommendImg src="https://images.ctfassets.net/sjvy5j5nlcjk/5WkkW53leu337RgxgwqC1i/adce2a5c46606debb7ca6cc382c7d66f/05-01.jpg?w=320&fm=webp" />
              <S.RecommendItemTitle>동킹콩 리턴즈</S.RecommendItemTitle>
              <S.RecommendItemPrice>37,000원</S.RecommendItemPrice>
            </S.RecommendItem>
            <S.RecommendItem>
              <S.RecommendImg src="https://images.ctfassets.net/sjvy5j5nlcjk/JTCRojcRZOzRYyyxlI7hW/b051f9b66226a506a629222e3a4e616d/HACP_A7LQA_KRillu01_02_R_ad-0_1920_1080.jpg?w=320&fm=webp" />
              <S.RecommendItemTitle>패미컴 탐정 크루 에미오</S.RecommendItemTitle>
              <S.RecommendItemPrice>39,000원</S.RecommendItemPrice>
            </S.RecommendItem>
          </S.RecommendItemWrapper>
        </S.RecommendWrapper>
        <ProductInfinite />
      </S.ContentWrapper>
    </S.ProductDetailWrapper>
  );
};
