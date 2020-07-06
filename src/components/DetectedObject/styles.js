import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  &&::-webkit-scrollbar,
  ::-webkit-scrollbar-button,
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const Title = styled.h1`
  color: #22D1EE;
  margin: 10px 0;

  &&::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: #22D1EE;
    margin-bottom: 15px;
  }
`;

export const Objects = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.span`
  width: 50%;
  height: 40px;
  border: 1px solid #22D1EE;
  border-radius: 25px;
  color: #22D1EE;
  margin-right: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;