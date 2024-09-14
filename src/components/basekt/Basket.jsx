import React from 'react';

function Basket() {
  return (
    <>
      <div className="container mx-auto cart-top">
        <h1 className="font-bold text-[1.5em] p-4 text-center w-full bg-red-200">장바구니</h1>

        <div className="content-area h-[60px] flex justify-center items-center">
          <div className="cart-tabs  w-[700px] text-center flex relative bg-indigo-100">
            <div className="cart-tab active relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
              <div className="count">2</div>
              <div className="title font-semibold text-[13px]">Kream 배송</div>
            </div>
            <div className="cart-tab2 relative h-[60px] w-1/2 cursor-pointer p-2 border-b border-gray-300">
              <div className="count">0</div>
              <div className="title font-semibold text-[13px]">브랜드 배송</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
