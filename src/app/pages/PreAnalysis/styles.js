import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  margin-left: 80px;
`;

export const FileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
  
  .button {
    position: absolute;
    padding: 10px;
    height: 80px;
    width: 200px;
    background: #0E153A;
    border: none;
    border-radius: 20px;
    color: #22D1EE;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  
    span {
      margin: 0 5px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background: #0E153A;
    margin: 0 10px;
    border-radius: 25px;
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      opacity: 0.3;
    }

    @media (max-width: 860px) {
      flex-direction: column;
      margin-bottom: 15px;
    }
  }

`;

export const FileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #0E153A;
  border-radius: 25px;
  padding: 30px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #22D1EE;
  font-size: 1.5em;
`;

export const Description = styled.div`
  color: #6C63FF;

  p {
    margin: 10px 0;
  }
`;

export const Wrapp = styled.div`
  p {
    color: #6C63FF;
    font-weight: bold;
    font-size: 1.5em;
  }

  span {
    color: #6C63FF;
    font-weight: bold;
    font-size: 1.2em;
  }
`;