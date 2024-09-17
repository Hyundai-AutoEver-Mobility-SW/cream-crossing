import React, { useState } from 'react';
import productList from './data/productList';

function CartContent() {
  return (
    <div className="cart-content w-full min-h-screen bg-gray-100">
      <div className="layout-list w-full sm:w-[700px] mx-auto">
        <div className="divider h-[24px] bg-green-100"></div>
        <div className="content-header rounded-t-lg p-[20px_16px_10px] bg-white flex justify-between">
          <div className="group flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 mr-2" />
            <div className="text-body font-semibold text-sm">
              <p> </p>
            </div>
          </div>
          <div className="group">
            <button className="ml-2 text-xs cursor-pointer border-box rounded-[100px] overflow-hidden px-[10px] py-[4px] shadow-[inset_0px_0px_0px_1px_rgb(235,235,235)]">
              선택 삭제
            </button>
          </div>
        </div>
        {/* <div className="product-list-info p-[0px_16px_20px] bg-white w-full">
          <div className="thumbnail rounded-lg bg-gray-200 w-[80px] h-[80px]">
            <div className="product-image w-[80px] h-[80px]"></div>
          </div>
          상품입니다
        </div> */}

        {productList.map((product, index) => (
          <div key={index} className="product-list-info p-[0px_16px_20px] bg-white w-full flex items-center space-x-4">
            <div className="thumbnail rounded-lg bg-gray-200 w-[80px] h-[80px] overflow-hidden">
              <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" />
            </div>
            <div className="content-list-vertical">
              <div className="content-text-description">
                <div className="font-semibold text-sm">{product.name}</div>

                <div className="text-sm">{product.description}</div>
                <div className="text-sm">{product.variety}</div>
              </div>
              {/* <div className="text-sm">배송비: {product.shippingCost}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartContent;
