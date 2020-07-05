import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  float: right;
 
  .icon {
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const LoggedInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 10px;

    p {
      font-weight: bold;
      font-size: 1.2em;
    }

    span {
      display: flex;
      justify-content: flex-end;
      font-size: 0.8em;
    }
  }
`;