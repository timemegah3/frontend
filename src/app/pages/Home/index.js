import React from 'react';
import { FiAlertTriangle, FiHeadphones } from 'react-icons/fi';
import { IoIosTrendingUp } from 'react-icons/io';
import { GiMiningHelmet, GiCctvCamera, GiChelseaBoot, GiNinjaMask, GiProtectionGlasses } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';

import Navigation from '../../../components/Navigation';
import TopInfo from '../../../components/TopInfo';
import Card from '../../../components/Card';
import EPI from '../../../components/EPI';
import Camera from '../../../components/Camera';

import { Container, Wrap, Cards, Graphic, Title } from './styles';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <Container>
        <TopInfo />
        <div className="wrap">
          <Wrap>
            <Cards>
              <Card icon={<IoIosTrendingUp size={32} color="#6C63FF" />} number="10" title="Dias" subtitle="sem acidentes"/>
              <Card icon={<FiAlertTriangle size={32} color="#6C63FF" />} number="05" title="Alertas" subtitle="esse mês"/>
            </Cards>

            <Graphic>
              <Title>
                {/* <IoIosTrendingUp size={32} color="#6C63FF" /> */}
                <h1>Acidentes x Mês</h1>
              </Title>

              <GoGraph size={300} color="#22D1EE" /> 
            </Graphic>
          </Wrap>

          <Wrap>
            <Cards>
              <Card icon={<GiMiningHelmet size={32} color="#6C63FF" />} number="35" title="Kit's" subtitle="de proteção"/>
              <Card icon={<GiCctvCamera size={32} color="#6C63FF" />} number="12" title="Câmeras" subtitle="capturando imagens"/>
            </Cards>

            <div className="grid">
              <Graphic>
                <Title>
                  <h1>EPI's</h1>
                </Title>

                <EPI icon={<GiMiningHelmet size={32} color="#22D1EE" />} title="Capacetes" number="37" />
                <EPI icon={<GiNinjaMask size={32} color="#22D1EE" />} title="Máscaras" number="56" />
                <EPI icon={<GiProtectionGlasses size={32} color="#22D1EE" />} title="Óculos de proteção" number="41" />
                <EPI icon={<FiHeadphones size={32} color="#22D1EE" />} title="Protetores auriculares" number="35" />
                <EPI icon={<GiChelseaBoot size={32} color="#22D1EE" />} title="Botas" number="39" />

              </Graphic>

              <Graphic>
                <Title>
                  <h1>Câmeras</h1>
                </Title>

                <Camera number="01" title="Entrada do galpão" />
                <Camera recording number="02" title="Estacionamento" />
                <Camera number="03" title="Sala de maquinário" />
                <Camera recording number="04" title="Sala do engenheiro" />
                <Camera number="05" title="Refeitório" />
                <Camera recording number="06" title="Estoque de material" />

              </Graphic>
            </div>
          </Wrap>

        </div>
      </Container>
    </>
  )
}