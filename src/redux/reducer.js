const initialState = {
  favorites: [], // 관심상품 목록을 담을 배열
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      // 이미 관심상품에 추가된 상품이 있는지 확인
      if (state.favorites.find(item => item.id === action.payload.id)) {
        return state; // 이미 추가된 상품은 다시 추가하지 않음
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // 새로운 상품 추가
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.id), // 상품 제거
      };

    default:
      return state;
  }
};

export default reducer;
