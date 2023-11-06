import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify"

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.css'; // React-Toastify CSS 추가

import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center; // 디자인 편하게 하려고 꼼수
  }

  * {
    box-sizing: inherit;
  }

  .cusor-pointer {
    cursor: pointer;
  }

  /* 넘치는 텍스트에 줄임표(... 만들기) */
  .text-ellipsis {
    white-space: nowrap; // 줄바꿈 안함
    overflow: hidden; // 넘친 부분 숨기기
    text-overflow: ellipsis; // 넘친 부분을 어떻게 보일지 지정
  }
`;


// { 컴포넌트에 커스텀(CSS) 하기 } - 안됨
// const StyledButton = styled(Button)`
// `;


function App() {
  return (
    <>
      <GlobalStyle />
      {/* 부트스트랩 연습 */}
      {/* <Button variant="success">Success</Button>
      <button type="button" class="btn btn-warning">Warning</button> */}


      {/* Quiz: Layout 컴포넌트로 추출 및 Outlet을 활용하여 라우팅 구성해보기 */}
      {/* src/pages/Layout.js */}

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index: index route(여기서는 default child route) */}
          <Route index element={<Main />} />
          {/* Quiz: 상품별 상세페이지 여러 개를 라우팅하려면? URL 파라미터 사용 
            예: /detail/1로 접속하면 productId에 1이 당기도록 설정 */}
          <Route path="detail/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>} />
        </Route>
      </Routes>

      
      {/* 토스트 하나로 재사용 */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </>
  );
}

export default App;

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 부트스트랩을 써도 무관
// 리액트용 - https://react-bootstrap.netlify.app/
// 기존용 - https://getbootstrap.com/

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios