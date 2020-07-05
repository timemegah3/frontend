import React from 'react';

import { Container, Icon, Recording } from './styles';

function Camera({ recording, number, title }) {
  return (
    <Container rec={recording ? '#0A0C14' : ''} >
      <Icon>
        {number}
      </Icon>
      <h1>{title}</h1>

      <Recording>
        <div>
          {recording && (
            <div className="rec"></div>
          )}
        </div>
        {recording ? 'Gravando' : 'Parada'}
      </Recording>
    </Container>
  );
}

export default Camera;