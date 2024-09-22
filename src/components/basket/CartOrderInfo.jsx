import React, { useEffect } from 'react';

function CartOrderInfo({ productList, onTotalPayment }) {
  const totalPrice = productList.reduce((acc, product) => acc + product.price, 0);

  const shippingCost = 5000;
  const totalPayment = totalPrice + shippingCost;

  // totalPayment 값을 부모 컴포넌트로 전달
  useEffect(() => {
    onTotalPayment(totalPayment);
  }, [totalPayment, onTotalPayment]);

  return (
    <>
      <div className="cart-content w-full bg-gray-100">
        <div className="layout-list w-full sm:w-[700px] mx-auto">
          <div className="divider h-[8px]"></div>
          <div className="text-body rounded-t-lg w-full sm:w-[700px] mx-auto gap-x-[2px] gap-y-0 pt-[15px] pr-[16px] pb-[15px] pl-[16px] bg-white">
            <p className="text-left w-auto text-gray-900 font-bold">선택 주문정보</p>
          </div>
          <div className="divider h-px px-4 bg-white">
            <div className="divider-data bg-[#F4F4F4] h-[1px]"></div>
          </div>

          <div className="layout-list gap-x-1 gap-y-0 p-3 px-4 bg-white ">
            <div className="text-table py-0.5 bg-white">
              <div className="title-labels flex justify-between">
                <div className="text-body-title gap-y-0 gap-x-0.5 p-0">
                  <p className="text-gray-500 text-left w-inherit text-sm">총 상품금액</p>
                </div>
                <div className="text-table-labels flex flex-col">
                  <div className="labels">
                    <div className="text-body-label gap-y-0 gap-x-0.5">
                      <p className="text-gray-900 text-right w-inherit text-sm">{totalPrice.toLocaleString()}원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-table py-0.5 bg-white">
              <div className="title-labels flex justify-between">
                <div className="text-body-title gap-y-0 gap-x-0.5 p-0">
                  <p className="text-gray-500 text-left w-inherit text-sm">총 배송비</p>
                </div>
                <div className="text-table-labels flex flex-col">
                  <div className="labels">
                    <div className="text-body-label gap-y-0 gap-x-0.5">
                      <p className="text-gray-900 text-right w-inherit text-sm">{shippingCost.toLocaleString()}원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider h-px px-4 bg-white">
            <div className="divider-data bg-[#F4F4F4] h-[1px]"></div>
          </div>

          <div className="text-table-allcost rounded-b-lg p-4 px-4 bg-white">
            <div className="title-labels flex justify-between">
              <div className="text-body-title gap-y-0 gap-x-0.5 p-0">
                <p className="text-gray-900 text-left w-inherit text-sm font-semibold">총 예상 결제금액</p>
              </div>
              <div className="text-table-labels flex flex-col">
                <div className="labels">
                  <div className="text-body-label gap-y-0 gap-x-0.5">
                    <p className="text-gray-900 text-right w-inherit text-[16px] font-bold">
                      {totalPayment.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider-horizontal h-[8px]"></div>

          <div className="text-body-bullet rounded-t-[10px] p-[16px_16px_6px] gap-[6px] bg-[rgb(250,250,250)] flex">
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[rgb(34,34,34)] text-left w-[inherit] text-[13px]">∙</p>
            </div>
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[13px] text-[rgba(34,34,34,0.8)] text-left w-[inherit]">
                배송 방법 및 쿠폰/포인트 적용 여부는 결제 시 선택할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="text-body-bullet p-[0px_16px_6px] gap-[6px] bg-[rgb(250,250,250)] flex">
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[rgb(34,34,34)] text-left w-[inherit] text-[13px]">∙</p>
            </div>
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[13px] text-[rgba(34,34,34,0.8)] text-left w-[inherit]">
                총 결제금액은 배송 방법 및 쿠폰/포인트 적용 여부에 따라 달라질 수 있습니다.
              </p>
            </div>
          </div>

          <div className="text-body-bullet p-[0px_16px_6px] gap-[6px] bg-[rgb(250,250,250)] flex">
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[rgb(34,34,34)] text-left w-[inherit] text-[13px]">∙</p>
            </div>
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[13px] text-[rgba(34,34,34,0.8)] text-left w-[inherit]">
                예상 결제금액은 기본 배송 방법 및 일반 결제로 주문했을 때의 가격입니다.
              </p>
            </div>
          </div>

          <div className="text-body-bullet rounded-b-[10px] p-[0px_16px_16px] gap-[6px] bg-[rgb(250,250,250)] flex">
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[rgb(34,34,34)] text-left w-[inherit] text-[13px]">∙</p>
            </div>
            <div className="text-body gap-y-[0px] gap-x-[2px]">
              <p className="text-[13px] text-[rgba(34,34,34,0.8)] text-left w-[inherit]">
                예상 결제금액은 기본 배송 방법 및 일반 결제로 주문했을 때의 가격입니다.
              </p>
            </div>
          </div>

          <div className="divider-horizontal h-[8px]"></div>
        </div>
      </div>
    </>
  );
}

export default CartOrderInfo;
