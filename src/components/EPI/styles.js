import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;

  h1 {
    font-size: 17px;
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
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #22D1EE;


  

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