import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai'
import { GiCctvCamera } from 'react-icons/gi'

import { Nav} from './styles';

function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active" title="Dashboard">
            <AiOutlineDashboard size={50} className="activeColor"/>
          </NavLink>
        </li>

        <li>
          <NavLink to="/analyze" activeClassName="active" title="Analisar">
            <GiCctvCamera size={50} className="activeColor"/>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;