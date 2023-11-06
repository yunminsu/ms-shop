import React from 'react';
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from '../features/cart/cartSlice';

function Cart(props) {
  const cartList = useSelector(selectCartList);

  const dispatch = useDispatch();

  // { 숫자 포맷 적용 ',' 만 찍기 }
  const format = new Intl.NumberFormat('ko-Kr');

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 하기 */}
          {cartList.map((cart, index) => { 
            return ( 
              <tr key={cart.id}>
                <td>{index + 1}</td>
                <td>{cart.title}</td>
                <td>
                  <button onClick={() => dispatch(decreaseCount(cart.id))}>
                    -
                  </button>
                  {cart.count}
                  <button onClick={() => dispatch(increaseCount(cart.id))}>
                    +
                  </button>
                </td>
                <td>{format.format(cart.price * cart.count)}원</td>
                {/* Quiz: 표의 행마다 삭제 버튼 만들고 누르면 상품이 삭제되도록 만들기 */}
                <td>
                  <button onClick={() => dispatch(removeItemFromCart(cart.id))}>삭제</button>
                </td>
              </tr> 
            ) 
          })}

          <tr>
            <th>합계</th>
            <td></td>
            <td></td>
            <th>
              {format.format(cartList.reduce((prev, cart) => { // { 첫번째 인자값: 토탈 값, 두번째 인자값: 배열의 전체 }
                return prev + (cart.price * cart.count);
              }, 0))}
            </th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Cart;