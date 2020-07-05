import React from 'react';

import { Container, Icon, Info } from './styles';

function EPI({ icon, title, number }) {
  return (
    <Container>
      <Icon>
        {icon}
      </Icon>
      <h1>{title}</h1>

      <Info>
        <p>{number}</p>
      </Info>
    </Container>
  );
}

export default EPI;