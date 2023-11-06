import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductList } from '../features/product/productSlice';
import { Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LatestViewWrapper = styled(Card)`
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  width: 8rem;
`;

function LatestView(props) {

  const latestViewed = JSON.parse(localStorage.getItem('latestViewed')); // 없으면 null을 반환
  const productList = useSelector(selectProductList); // 처음 새로고침 시 초기값 빈 배열
  const navigate = useNavigate();

  // 최근 본 상품이 없거나 사품 목록이 없을 때는 렌더링 막기
  if (!latestViewed || productList.length < 1) {
    return null; // { null로 렌더링 막기 }
  }

  // 최근 본 상품들만 찾아서 배열로 만들기
  const latestViewedProducts = latestViewed.map((id) => {
    return productList.find((product) => product.id === id)
  })

  return (
    <LatestViewWrapper>
      <Card.Header>최근 본 상품</Card.Header>
      <ListGroup variant="flush">
        {/* { slice로 배열 자르기, 3개만 표출 }  */}
        {latestViewedProducts.slice(0, 3).map((product) => 
          // 주의: key 속성은 가장 최상위 엘리먼트에 부여, <></>에는 속성 사용 불가
          // { <React.Fragment> 사용 }
          <React.Fragment key={product.id}>
            <img 
              src={product.imagePath} 
              alt={product.title}
              className='cursor-pointer'
              onClick={() => {
                navigate(`/detail/${product.id}`)
              }}
            />
            <ListGroup.Item className='text-ellipsis'>{product.title}</ListGroup.Item>
          </React.Fragment>
        )}
      </ListGroup>

      {/* 3개까지만 표출하고 초과 시 최근 본 상품페이지로 이동 */}
      {latestViewedProducts.length > 3 && 
        <Card.Body>
          <Card.Link href="#">더보기</Card.Link>
        </Card.Body>
      }
    </LatestViewWrapper>
  );
}

export default LatestView;