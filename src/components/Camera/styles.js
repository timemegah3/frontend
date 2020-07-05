import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;

  h1 {
    font-size: 15px;
    text-align: center;
    color: #22D1EE;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #22D1EE;
  background: #6C63FF;
  padding: 15px;
  color: #22D1EE;
  font-weight: bold;
`;

export const Recording = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  color: #22D1EE;
  width: 10%;

  .rec {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #22D1EE; 
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #22D1EE; 
  }
`;