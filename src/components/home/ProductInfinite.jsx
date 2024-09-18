import * as S from '../../styles/home/ProductInfinite.style';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { useCallback, useEffect, useRef, useState } from 'react';
import generateProductsDetailData from '../../data/home/productsDetailData';

function ProductInfinite() {
  const [products, setProducts] = useState(generateProductsDetailData(0, 12));
  const [page, setPage] = useState(1); // 현재 페이지
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const [hasMore, setHasMore] = useState(true); // 추가 데이터 여부
  const observerRef = useRef(null); // 마지막 요소를 관찰할 ref

  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return; // 이미 로딩 중이거나 더 불러올 데이터가 없으면 중단
    setLoading(true);
    // 새로운 페이지 데이터 추가
    const newProducts = generateProductsDetailData(page, 12);
    if (newProducts.length > 0) {
      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(prevPage => prevPage + 1); // 다음 페이지로 설정
    } else {
      setHasMore(false); // 더 이상 불러올 데이터가 없을 경우
    }
    setLoading(false);
  }, [page, loading, hasMore]);
  // 마지막 요소를 관찰할 ref
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts(); // 마지막 요소가 화면에 보이면 추가 데이터 로드
        }
      },
      { threshold: 1.0 }, // 100% 보일 때 작동
    );

    if (observerRef.current) {
      observer.observe(observerRef.current); // 마지막 요소 관찰 시작
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current); // 언마운트 시 관찰 해제
      }
    };
  }, [loadMoreProducts, hasMore]);
  const handleFavorite = () => {
    // 즐겨찾기 처리 로직
  };
  return (
    <>
      <S.ProductInfinite>
        <div className="divider"></div>
        <div className="product-text-wrap">
          <div className="title-wrap">
            <div className="title">회원님을 위한 추천 상품</div>
          </div>
        </div>
        <div className="product-list-wrap">
          <div className="product-list">
            {products.map((item, i) => (
              <div key={i} className="product-item">
                <div className="item-img">
                  <img src={item.img_src} alt="" />
                  <div className="trade-amount">거래 {item.trade_amount}</div>
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
            <div ref={observerRef} style={{ height: '1px' }}></div>
          </div>
          1{loading && <div>Loading...</div>} {/* 로딩 중일 때 */}
          {!hasMore && <div>No more products</div>} {/* 더 이상 로드할 데이터가 없을 때 */}
        </div>
      </S.ProductInfinite>
    </>
  );
}

export default ProductInfinite;
