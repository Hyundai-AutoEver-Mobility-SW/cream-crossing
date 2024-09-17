import React from 'react';

function CartScreen() {
  return (
    <>
      <div className="container mx-auto cart-screen">
        <div className="cart-header top-[145px] h-[48px] sticky">
          <div className="cart-header-wrap w-full sm:w-[700px] h-[48px] mx-auto">
            <div className="text-header p-3 px-4 bg-purple-100 flex justify-between">
              <div className="group flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 mr-2" />
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
    </>
  );
}

export default CartScreen;
