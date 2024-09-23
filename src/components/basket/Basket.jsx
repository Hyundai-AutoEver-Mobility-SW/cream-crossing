import { useState, useEffect } from 'react';
import CartContent from './CartContent';
import CartOrderInfo from './CartOrderInfo';
import CartFooter from './CartFooter';
import ProductInfinite from '../home/ProductInfinite';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action';

function Basket() {
  // productList의 복사본
  // const [productList, setProductList] = useState(productListData);
  // console.log(productList);
  const cartItems = useSelector(state => state.cart); // 리듀서에서 가져온 장바구니 데이터
  const [productList, setProductList] = useState(cartItems);
  const dispatch = useDispatch();

  // Redux 상태가 변경될 때마다 productList를 갱신
  useEffect(() => {
    if (cartItems) {
      setProductList(cartItems); // Redux에서 가져온 장바구니 데이터로 설정
    }
  }, [cartItems]);

  // totalPayment 저장할 상태
  const [totalPayment, setTotalPayment] = useState(0);

  // 전체 선택 상태 (기본값을 true로 설정)
  const [allCheck, setAllCheck] = useState(true);

  // 각 상품의 체크 상태관리 (모든 상품을 기본적으로 체크 상태로 설정)
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    // 컴포넌트가 처음 로드될 때 모든 상품을 체크 상태로 설정
    const newCheckedItems = {};
    productList.forEach(product => {
      newCheckedItems[product.id] = true; // 기본적으로 체크된 상태로 설정
    });
    setCheckedItems(newCheckedItems);
  }, [productList]);

  const handleAllCheck = e => {
    const isChecked = e.target.checked;
    setAllCheck(isChecked);

    // 모든 상품의 체크 상태를 전체선택 여부로 설정
    const newCheckedItems = {};
    productList.forEach(product => {
      newCheckedItems[product.id] = isChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  // 개별 상품 체크 상태 변경
  const handleItemCheck = (productId, isChecked) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [productId]: isChecked,
    }));

    // 모든 상품이 선택되었는지 확인해서 전체 선택 상태를 업데이트
    const allChecked = Object.values({ ...checkedItems, [productId]: isChecked }).every(value => value);
    setAllCheck(allChecked);
  };

  // 상품 삭제
  const handleDelete = productId => {
    // 선택된 상품을 제거한 새로운 리스트
    const updatedProductList = productList.filter(product => product.id !== productId);
    setProductList(updatedProductList);

    // 체크된 항목 함께 제거
    const updatedCheckedItems = { ...checkedItems };
    delete updatedCheckedItems[productId];
    setCheckedItems(updatedCheckedItems);

    // 리덕스 스토어에서도 해당 상품을 제거하도록 액션 디스패치
    dispatch(removeFromCart(productId));
    console.log(productId, '장바구니에서 삭제되었습니다.');
    console.log(cartItems);
  };

  // CartOrderInfo로부터 totalPayment 값을 받아오는 콜백 함수
  const handleTotalPayment = totalPaymentValue => {
    setTotalPayment(totalPaymentValue); // totalPayment 값을 상태로 저장
  };

  return (
    <>
      <div className="full-w">
        <div className="mx-auto cart-top mt-10 bg-gray-100">
          <h1 className="font-bold text-[1.5em] p-4 text-center w-full bg-white">장바구니</h1>

          {/* cart-content에 sticky 적용 */}
          <div className="content-area block mx-auto sticky top-0 z-10 bg-white">
            <div className="flex justify-center items-center">
              <div className="cart-tabs w-[700px] text-center flex relative bg-white">
                <div className="cart-tab active relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
                  <div className="count font-bold">{productList.length}</div>
                  <div className="title font-semibold text-[13px]">Kream 배송</div>
                </div>
                <div className="cart-tab2 relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
                  <div className="count font-bold">0</div>
                  <div className="title font-semibold text-[13px]">브랜드 배송</div>
                </div>
              </div>
            </div>
            <div className="cart-header top-[145px] h-[48px] sticky">
              <div className="cart-header-wrap w-full sm:w-[700px] h-[48px] mx-auto">
                <div className="text-header pt-3 pb-0 px-4 bg-white flex justify-between">
                  <div className="group flex items-center">
                    <input
                      type="checkbox"
                      onChange={handleAllCheck}
                      checked={allCheck}
                      className="peer h-5 w-5 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:outline-none mr-2"
                    />
                    <div className="text-body font-semibold text-sm">
                      <p>전체 선택</p>
                    </div>
                  </div>
                  <div className="group">
                    <button
                      className="ml-2 text-xs cursor-pointer border-box rounded-[100px] overflow-hidden px-[10px] py-[4px] shadow-[inset_0px_0px_0px_1px_rgb(235,235,235)]"
                      onClick={() => {
                        // 선택된 항목 삭제 로직
                        const updatedProductList = productList.filter(product => !checkedItems[product.id]);
                        setProductList(updatedProductList);

                        const updatedCheckedItems = {};
                        setCheckedItems(updatedCheckedItems); // 모든 체크박스 초기화
                      }}>
                      전체 삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {productList.map(product => (
            <CartContent
              key={product.id}
              product={product}
              isChecked={checkedItems[product.id] || false}
              onItemCheck={handleItemCheck}
              onDelete={handleDelete}
            />
          ))}

          <CartOrderInfo productList={productList} onTotalPayment={handleTotalPayment} />

          <CartFooter totalPayment={totalPayment} productCount={productList.length} />
        </div>
        <ProductInfinite />
      </div>
    </>
  );
}

export default Basket;
