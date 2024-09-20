// CartModalView.jsx
import React from 'react';
import productList from '../basket/data/productList';

function CartModalView({ isOpen, onClose, product }) {
  if (!isOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <>
      {/* <div className=" px-[16px]">
        <div className="divider"></div>
      </div> */}
      <div className=" content bg-gray-50 pt-0 pr-4 pb-4 pl-4 rounded-b-lg">
        <div className="bg-gray-50 h-[1px]">
          <div className="bg-[#F4F4F4] h-[1px]"></div>
        </div>
        <div>
          <div className="content-bottom mt-3  bg-gray-50">
            <div className="title-label flex justify-between">
              <div className="title-label-cost gap-x-[2px] gap-y-0 pt-[1px] pr-0 pb-0 pl-0">
                {' '}
                <p className="text-sm text-[#909090] text-left">상품금액</p>
              </div>

              <div className="title-text-labels flex flex-col">
                <div className="labels flex gap-x-[2px] gap-y-0">
                  <p className="text-body-label-cost text-sm">{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="content-bottom mt-3  bg-gray-50">
            <div className="title-label flex justify-between">
              <div className="title-label-cost gap-x-[2px] gap-y-0 pt-[1px] pr-0 pb-0 pl-0">
                {' '}
                <p className="text-sm text-[#909090] text-left">배송비</p>
              </div>

              <div className="title-text-labels flex flex-col">
                <div className="labels flex gap-x-[2px] gap-y-0">
                  <p className="text-body-label-cost text-sm">{product.shippingCost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModalView;
