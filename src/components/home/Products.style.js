import styled from 'styled-components';

export const ProductWrap = styled.div`
  .product-text-wrap {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .title {
      font-size: 17px;
    }
    .subtitle {
      font-size: 14px;
      color: rgba(34, 34, 34, 0.5);
    }
  }
  .product-list-wrap {
    width: 100%;
    .slick-track {
      display: flex;
      gap: 8px;
    }

    .product-list {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
    }
    .product-item {
      width: 20%;
      @media (max-width: 960px) {
        min-width: 150px !important;
      }
      .item-img {
        position: relative;
        img {
          /* border: 1px solid rgba(0, 0, 0, 0.5); */
          border-radius: 8px;
        }
        .wish-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 10px;
        }
      }
      .info-box {
        padding: 8px;
        .name {
          font-size: 13px;
          font-weight: 700;
        }
        .desc {
          font-size: 13px;
          padding-bottom: 12px;
          /* display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis; */
        }
        .price {
          font-size: 14px;
          font-weight: 700;
        }
        .price-desc {
          font-size: 11px;
          color: rgba(34, 34, 34, 0.5);
        }
      }
    }
  }
  .more-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .more-btn {
      display: flex;
      align-items: center;
      border: 1px solid #d3d3d3;
      color: rgba(34, 34, 34, 0.8);
      padding: 0 30px;
      border-radius: 8px;
      color: #222;
      height: 42px;
      font-size: 14px;
    }
  }
`;
