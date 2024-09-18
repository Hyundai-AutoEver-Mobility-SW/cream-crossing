// CartModalView.jsx
import React from 'react';

function CartModalView({ isOpen, onClose }) {
  if (!isOpen) return null; // 모달이 열리지 않으면 렌더링하지 않음

  return (
    <div className="mt-2 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold">모달 콘텐츠</h2>
      <p>이곳에 모달 내용을 추가하세요.</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
        닫기
      </button>
    </div>
  );
}

export default CartModalView;
