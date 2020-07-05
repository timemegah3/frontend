import styled from 'styled-components';

export const Box = styled.div`
  width: 90%;
  padding: 20px;
  background: #0E153A;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #6C63FF;
  background: #22D1EE;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22D1EE;
  font-size: 24px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    p {
      font-size: 0.8em;
      font-weight: bold;
    }

    span {
      font-size: 0.5em;
    }
    
  }
`;
