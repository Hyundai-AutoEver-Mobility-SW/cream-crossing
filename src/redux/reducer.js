const initialState = {
  cart: [], // 장바구니 목록을 담을 배열
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // 장바구니에 이미 있는 상품인지 확인
      if (state.cart.find(item => item.id === action.payload.id)) {
        return state; // 이미 추가된 상품은 다시 추가하지 않음
      }
      return {
        ...state,
        cart: [...state.cart, action.payload], // 장바구니에 새로운 상품 추가
      };

    case 'REMOVE_FROM_CART':
      // 장바구니에서 해당 상품 제거
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id), // 해당 상품 제거
      };

    default:
      return state;
  }
};

export default reducer;
