import { createSlice } from "@reduxjs/toolkit";

// { 여러 정보를 담기 위해 객체로 사용, 추가로 삽입할 데이터가 있을때 유용 }
const initialState = {
  cartList: [
    // {
    //   id: '1',
    //   title: "Arcsaber 11 Pro",
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: '3',
    //   title: "Aerus Z",
    //   price: 199000,
    //   count: 1
    // },
  ],
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart', // { 리듀서 만들때 사용 cart/ }
  initialState,
  reducers: {
    // Quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find(cart => cart.id === action.payload);
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => { // { action.payload에 id라는 별칭 지정 }
      const targetItem = state.cartList.find(cart => cart.id === id);
      targetItem.count -= 1;
      // { 수량 1개 미만 유효성 }
      // if (!targetItem.count) {
      //   alert('1개 이상만 주문 가능합니다.')
      //   targetItem.count = 1;
      // }
    },
    // Quiz: 위와 동일한 형태의 객체를 넘겨주면 cartList에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: item }) => {
      const targetItem = state.cartList.find(cart => cart.id === item.id);
      if (targetItem) {
        targetItem.count += item.count;
      } else {
        state.cartList.push(item);
      }
    },
    // Quiz: 장바구니에서 삭제하는 리듀서 만들기
    removeItemFromCart: (state, { payload: removeId }) => {
      // 방법1 { splice() 사용 시 }
      // const targetIndex = state.cartList.findIndex(cart => cart.id === removeId);
      // state.cartList.splice(targetIndex, 1); // @reduxjs/toolkit에서는 state 직접 변경 가능

      // 방법2 filte() 사용 시
      const newCartList = state.cartList.filter(remove => remove.id !== removeId); 
      state.cartList = newCartList;
    },
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;