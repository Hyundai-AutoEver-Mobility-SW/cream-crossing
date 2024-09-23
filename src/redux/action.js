// 장바구니에 제품 추가 액션 생성 함수
export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

// 장바구니에서 제품 삭제 액션 생성 함수
export const removeFromCart = productId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { id: productId },
  };
};
