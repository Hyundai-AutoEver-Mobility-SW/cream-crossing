// CartModalView.jsx
import React from 'react';

function CartModalView({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <>
      <div className="divider h-[1px] px-[16px]"></div>
      <div className=" content bg-gray-50 p-4 rounded-b-lg">
        <h2 className="text-lg font-bold">모달 콘텐츠</h2>
        <p>이곳에 모달 내용을 추가하세요.</p>
      </div>
    </>
  );
}

export default CartModalView;
