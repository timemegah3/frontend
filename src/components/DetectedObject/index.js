import React, { useEffect, useState } from 'react';

import { Wrapp, Title, Item } from './styles';

import api from '../../services/api';

function DetectedObject() {
  const [objects, setObjects] = useState([]);

  useEffect(() =>  {
    (async () => {
      await api.post('api/analisarImagem').then((res) => setObjects(res.data));
    })()
  }, [])
  return (
    <Wrapp>
      {objects.map((data, index) => (
        <>
          <Title key={index}>{data.type}</Title>
          <Item>{data.object}</Item>
        </>
      ))}
    </Wrapp>

  );
}

export default DetectedObject;
