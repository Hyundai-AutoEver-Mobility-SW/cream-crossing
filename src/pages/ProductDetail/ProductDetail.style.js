import styled, { css } from 'styled-components';

/* 테스트용 헤더 */
export const Header = styled.header`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
  width: 100vw;
  height: 86px;
  background-color: pink;
`;

export const ProductDetailWrapper = styled.div`
  min-height: calc(100vh-340px);
  margin-top: 86px;
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  overflow: hidden;
  padding: 30px 40px 120px;
  position: relative;
  height: 100%;
`;

export const MainWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 60px;
  position: relative;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const MainLeft = styled.div`
  max-width: 560px;
  width: 40%;

  ${({ $imgPosY }) => {
    if ($imgPosY) {
      return css`
        position: absolute;
        width: 50%;
        bottom: 60px;
      `;
    } else
      return css`
        position: fixed;
        top: 116px;
      `;
  }};
`;

export const MainRight = styled.div`
  display: flex;
  float: right;
  flex-direction: column;
  padding-left: 3%;
  border-left: 1px solid #ebebeb;
  box-sizing: border-box;
  width: 50%;
`;

export const ImgWrapper = styled.div`
  padding-right: 3%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(34, 34, 34);
`;

export const PriceTitle = styled.span`
  font-size: 13px;
`;

export const PriceValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 2px;
`;

export const TitleWrapper = styled.div`
  margin: 20px 0;
`;

export const Title = styled.p`
  font-size: 18px;
  color: rgb(34, 34, 34);
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

export const SizeButton = styled.div`
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ButtonTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #222;
`;

export const DropDownIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const ProductInfoItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  padding-left: 16px;
  border-left: 1px solid #ebebeb;

  ${({ $first }) =>
    $first &&
    css`
      border-left: none;
    `}
`;

export const ProductInfoTitle = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-size: 12px;
`;

export const ProductInfoValue = styled.div`
  font-size: 14px;
  margin-top: 4px;
  word-break: break-word;
`;

export const ColorButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const ColorButton = styled.button`
  background-color: rgb(239, 98, 83);
  align-items: center;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex: 1;
  position: relative;
  height: 60px;

  ${({ $color }) => {
    if ($color === 'red')
      return css`
        background-color: rgb(239, 98, 83);
      `;

    if ($color === 'green')
      return css`
        background-color: rgb(65, 185, 121);
      `;
  }}

  &::before {
    background-color: rgba(34, 34, 34, 0.1);
    bottom: 0;
    content: '';
    left: 55px;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;

export const ColorButtonTitle = styled.span`
  font-size: 18px;
  text-align: center;
  width: 55px;
`;

export const ColorButtonPrice = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  margin-left: 10px;
`;

export const CartButton = styled.button`
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  height: 60px;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(34, 42, 48, 0.1);
  }
`;

export const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #ebebeb;
`;

export const BenefitTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const BenefitTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const BenefitMoreView = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-size: 13px;
`;

export const BenefitInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BenefitInfoTitle = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-size: 12px;
  min-width: 48px;
`;

export const BenefitInfoContent = styled.span`
  color: rgb(34, 34, 34);
  font-size: 13px;
`;

export const DeliveryWrapper = styled(BenefitWrapper)`
  padding-top: 0;
`;

export const DeliveryTitle = styled(BenefitTitle)`
  padding-bottom: 12px;
`;

export const DeliveryInfoWrapper = styled.div`
  display: flex;
  padding-bottom: 12px;
  align-items: center;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DeliveryImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

export const DeliveryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DeliveryInfoTitle = styled.span`
  color: rgb(34, 34, 34);
  font-size: 13px;
  font-weight: 600;
  margin: 0 10px;
`;

export const DeliveryInfoSub = styled.span`
  color: rgb(34, 34, 34);
  font-size: 13px;
`;

export const DeliveryInfoExcept = styled.span`
  color: rgba(34, 34, 34, 0.5);
  font-size: 13px;
  margin: 0 10px;
`;

export const AdBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdImg = styled.img`
  height: 140px;
  border-radius: 5px;
`;

export const ScrollFooter = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  visibility: hidden;
`;

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const RecommendTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
`;

export const RecommendItemWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecommendItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
`;

export const RecommendImg = styled.img`
  aspect-ratio: 16 / 9;
  border-radius: 5px;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const RecommendItemTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const RecommendItemPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
