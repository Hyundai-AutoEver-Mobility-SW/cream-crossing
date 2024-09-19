import styled from 'styled-components';

export const ProductWrap = styled.div`
  .product-text-wrap {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .title {
      font-size: 17px;
      font-weight: 600;
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
      /* border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px; */
      @media (max-width: 960px) {
        min-width: 150px !important;
      }
      .item-img {
        position: relative;
        img {
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
  .more-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
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
