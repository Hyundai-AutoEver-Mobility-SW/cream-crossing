import React, { useState } from 'react';
import CartContent from './CartContent';
import CartOrderInfo from './CartOrderInfo';
import productList from './data/productList';

function Basket() {
  const [allCheck, setallCheck] = useState(false);
  const handleAllCheck = () => {
    if (!allCheck) {
      // 전체선택
      setallCheck(true);
    } else {
    }
  };

  return (
    <>
      <div className=" mx-auto cart-top">
        <h1 className="font-bold text-[1.5em] p-4 text-center w-full bg-red-200">장바구니</h1>

        {/* cart-content에 sticky 적용 */}
        <div className="content-area block mx-auto sticky top-0 z-10 bg-white">
          <div className="flex justify-center items-center">
            <div className="cart-tabs w-[700px] text-center flex relative bg-indigo-100">
              <div className="cart-tab active relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
                <div className="count">{productList.length}</div>
                <div className="title font-semibold text-[13px]">Kream 배송</div>
              </div>
              <div className="cart-tab2 relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
                <div className="count">0</div>
                <div className="title font-semibold text-[13px]">브랜드 배송</div>
              </div>
            </div>
          </div>
          <div className="cart-header top-[145px] h-[48px] sticky">
            <div className="cart-header-wrap w-full sm:w-[700px] h-[48px] mx-auto">
              <div className="text-header p-3 px-4 bg-purple-100 flex justify-between">
                <div className="group flex items-center">
                  <input
                    type="checkbox"
                    onClick={handleAllCheck}
                    className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                  />
                  <div className="text-body font-semibold text-sm">
                    <p>전체 선택</p>
                  </div>
                </div>
                <div className="group">
                  <button className="ml-2 text-xs cursor-pointer border-box rounded-[100px] overflow-hidden px-[10px] py-[4px] shadow-[inset_0px_0px_0px_1px_rgb(235,235,235)]">
                    선택 삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {productList.map(product => (
          <CartContent product={product} />
        ))}
        <CartOrderInfo />
      </div>
    </>
  );
}

export default Basket;
