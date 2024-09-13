import styled from 'styled-components';

const ProductWrap = styled.div`
  .product-text-wrap {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 17px;
  }
  .subtitle {
    font-size: 14px;
    color: rgba(34, 34, 34, 0.5);
  }
`;
function Products() {
  return (
    <>
      <ProductWrap>
        <div className="product-text-wrap">
          <div className="title-wrap">
            <div className="title">Most Popular</div>
            <div className="subtitle">인기 상품</div>
          </div>
          <div className="product-list-wrap">
            <div className="product-list">
              <div className="product-item">
                <div className="item-img"></div>
                <div className="wish-btn"></div>
                <div className="info-box"></div>
              </div>
            </div>
          </div>
          <div className="more-wrap">
            <div className="more-btn"></div>
          </div>
        </div>
      </ProductWrap>
    </>
  );
}

export default Products;
