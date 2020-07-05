import React from 'react';

import { Box, Icon, Info } from './styles';

function Card({ icon, number, title, subtitle }) {
  return (
    <Box>
      <Icon>
        {icon}
      </Icon>

      <Info>
        <h1>{number}</h1>

        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
      </Info>
    </Box>
  );
}

export default Card;