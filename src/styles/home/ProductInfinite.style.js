import styled from 'styled-components';

export const ProductInfinite = styled.div`
  .divider {
    height: 1px;
    background-color: rgba(34, 34, 34, 0.2);
    margin: 50px 0;
  }
  .product-text-wrap {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      font-size: 17px;
      font-weight: 700;
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
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 16px;
      gap: 8px;
    }
    .product-item {
      width: calc(25% - 6px);
      @media (max-width: 960px) {
        min-width: 200px !important;
      }
      .item-img {
        position: relative;
        img {
          /* border: 1px solid rgba(0, 0, 0, 0.5); */
          border-radius: 8px;
        }
        .trade-amount {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px;
          font-size: 12px;
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
          display: inline-flex;
          justify-content: center;
          align-items: center;
          /* background-color: #599200; */
          border-radius: 8px;
          padding: 0 8px;
          color: white;
          margin-bottom: 5px;
        }
        .tags {
          font-size: 10px;
          color: rgba(89, 146, 0, 1);
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
`;
