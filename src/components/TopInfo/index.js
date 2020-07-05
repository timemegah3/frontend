import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { RiLoginBoxLine } from 'react-icons/ri';

import { Container, LoggedInfo } from './styles';

function TopInfo() {
  return (
    <Container>
      <LoggedInfo>
        <div>
          <p>Paulo Roberto</p>
          <span>Téc.Seg.Trabalho</span>
        </div>
        <FaRegUserCircle size={24} title="Sua conta" className="icon" />
        <IoIosArrowDown size={24} className="icon" />
      </LoggedInfo>

      <IoMdNotificationsOutline size={24} title="Notificações" className="icon" />
      <RiLoginBoxLine size={24} title="Sair" className="icon" />
    </Container>
  );
}

export default TopInfo;