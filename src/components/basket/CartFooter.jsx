import React from 'react';

function CartFooter({ totalPayment, productCount }) {
  return (
    <>
      <div className="cart-footer bg-white bottom-0 shadow-[0_-1px_1px_0_rgba(0,0,0,0.06)] flex justify-center fixed w-full z-3">
        <div className="content-area w-[700px] ">
          <div className="layout-list-horizontal flex">
            <button className="red-button rounded-[10px] m-[8px] p-[10px_16px] bg-[rgb(239,98,83)] cursor-pointer flex-1 basis-0">
              <div className="button-text flex flex-col items-center justify-center min-h-[32px]">
                <div className="text-body gap-y-[0px] gap-x-[4px] ml-auto mr-auto">
                  <p className="text-white text-left w-[inherit]">
                    <em className="font-bold not-italic">{totalPayment.toLocaleString()}원</em>
                    <em className="text-[rgba(255,255,255,0.65)] not-italic"> · </em>
                    <em className="font-bold not-italic">총 {productCount}건 주문하기</em>
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartFooter;
