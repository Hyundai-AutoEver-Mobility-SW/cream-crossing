import React from 'react';

function Basket() {
  return (
    <>
      <div className="container mx-auto cart-top">
        <h1 className="font-bold text-[1.5em] p-4 text-center w-full bg-red-200">장바구니</h1>

        <div className="content-area h-[60px]">
          <div className="cart-tabs">
            <div className="cart-tab w-[700px]">
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
