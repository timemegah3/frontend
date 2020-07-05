import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from 'react-icons/ai'
import { GiCctvCamera } from 'react-icons/gi'

import { Nav} from './styles';

function Navigation() {
  const [dashActive, setDashActive] = useState(true);
  const [analyzeActive, setAnalyzeActive] = useState(false);

  function activeDash() {
    setAnalyzeActive(false);
    setDashActive(true);
  }
  
  function activeAnalyze() {
    setDashActive(false);
    setAnalyzeActive(true);
  }

  return (
    <Nav>
      <ul>
        <li className={dashActive ? 'active' : ''}>
          <Link to="/" onClick={() => activeDash()} title="Dashboard"><AiOutlineDashboard size={50} color={dashActive ? '#0E153A' : '#6C63FF'}/></Link>
        </li>

        <li className={analyzeActive ? 'active' : ''}>
          <Link to="/analyze" onClick={() => activeAnalyze()} title="Analisar"><GiCctvCamera size={50} color={analyzeActive ? '#0E153A' : '#6C63FF'}/></Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;