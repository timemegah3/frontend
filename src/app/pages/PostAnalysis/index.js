import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

import Navigation from '../../../components/Navigation';
import TopInfo from '../../../components/TopInfo';
import DetectedObject from '../../../components/DetectedObject';

import { Container, FileContent, FileDetail, Title, Description } from './styles';

import imageAnalyzed from '../../../assets/images/Video.jpg';

function PostAnalysis() {
  return (
    <>
      <Navigation />

      <Container>
        <TopInfo />
        <FileContent>
          <div className="centered">
            <img src={imageAnalyzed} alt="Vídeo analisado"/>
            <button>
              <span>Analisado</span>
              <BsCheckCircle size={26}/>  
            </button>
          </div>

          <div className="overflow">
            <DetectedObject/>
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

export default PostAnalysis;