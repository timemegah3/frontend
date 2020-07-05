import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 100px;
  margin-left: 80px;

  .wrap {
    display: flex;

    @media (max-width: 1200px) {
    flex-direction: column;
  }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 10px;
  border-radius: 25px;
  padding: 20px;

  .grid {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: stretch;

    @media (max-width: 860px) {
      flex-direction: column;
      margin-bottom: 10px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;


export const Graphic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #0E153A;
  border-radius: 25px;
  padding: 20px;
  height: 100%;
  margin-right: 10px;

  @media (max-width: 860px) {
    margin: 10px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    color: #22D1EE;
    width: 100%;
  }

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background: #22D1EE;
  }
`;