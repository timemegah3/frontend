import styled from 'styled-components';

export const Nav = styled.nav`
  width: 80px;
  height: 100vh;
  position: fixed;
  left: 0;
  background: #0E153A;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    .active {
      display: block;
      background: #6C63FF;
      padding: 15px;
      border-bottom-left-radius: 60px;
      border-top-left-radius: 60px;
    }

    .activeColor {
      color: #22D1EE;
    }
    
    li {
      margin: 20px 0;
    }
`;