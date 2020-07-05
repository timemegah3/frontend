import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { TiFolderOpen } from 'react-icons/ti';

import Navigation from '../../../components/Navigation';
import TopInfo from '../../../components/TopInfo';

import { Container, FileContent, FileDetail, Title, Description, Wrapp } from './styles';

import imageAnalyzed from '../../../assets/images/Video.jpg';

function PreAnalysis() {

  return (
    <>
      <Navigation analyze/>
      <Container>
        <TopInfo/>
        <FileContent>
          <div>
            <img src={imageAnalyzed} alt="Vídeo analisado"/>
            <Link to="/analyzed" className="button">
              <span>Analisar</span>
              <FiSearch size={26}/>
            </Link>
          </div>

          <div>
            <Wrapp>
              <TiFolderOpen size={200} color="#6C63FF" />
              <p>Análise não iniciada.</p>
              <span>Aguardando usuário...</span>
            </Wrapp>
          </div>
        </FileContent>

        <FileDetail>
          <Description>
            <Title>Câmera 2 - Pátio interno</Title>
            <p>Gravado em {new Date().toUTCString()} </p>
            <span>Duração: 130 minutos</span>
          </Description>
        </FileDetail>
      </Container>
    </>
  );
}

export default PreAnalysis;