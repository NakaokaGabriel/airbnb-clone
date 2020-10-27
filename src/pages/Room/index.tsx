import React, { useState, useCallback } from 'react';
import { RiGridFill, RiStarFill } from 'react-icons/ri';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Container from '../../components/Container';

import {
  Content,
  Title,
  RowContent,
  MainContent,
  PhotoPreview,
  Host,
  Description,
} from './styles';

import Availability from './Availability';

const Room: React.FC = () => {
  const [photoTooltip, setPhotoTooltip] = useState<boolean>(false);

  return (
    <>
      <Navigation />

      <Container>
        <Header />

        <Content>
          <Title>
            <h1>Bangalô próx. da ciclovia e praias</h1>

            <div className="stars">
              <RiStarFill /> <strong>4,98</strong> (4) - Ilhabela, São Paulo,
              Brasil
            </div>
          </Title>
          <RowContent>
            <MainContent>
              <PhotoPreview photoTooltip={photoTooltip}>
                <img
                  src="https://a0.muscache.com/im/pictures/d222e5b9-8f51-4a72-8f3d-b2b2ef811c86.jpg?aki_policy=xx_large"
                  alt="bangalo"
                />

                <div className="all-images">
                  <button
                    type="button"
                    onMouseOut={() => setPhotoTooltip(true)}
                    onBlur={() => setPhotoTooltip(false)}
                    onMouseLeave={() => setPhotoTooltip(false)}
                  >
                    <RiGridFill />
                  </button>
                  <span>Mostrar todas fotos</span>
                </div>
              </PhotoPreview>

              <Host>
                <div>
                  <h5>Condomínio inteiro hospedado por Andre</h5>
                  <span>2 hóspedes · 1 quarto · 1 cama · 1 banheiro</span>
                </div>
                <img
                  src="https://a0.muscache.com/im/pictures/user/da37b547-ec9d-4dcc-8afc-dd968de3475b.jpg?im_w=240"
                  alt="user"
                />
              </Host>

              <Description>
                <h3>Descrição</h3>

                <p>
                  Acomodação em casa estilo rústico com fácil acesso a praias,
                  ciclovias, farmácias, comércios e mercados. Uma casa simples
                  mas que oferece muito conforto e conveniência.
                </p>

                <strong>O espaço</strong>

                <p>
                  Todos os ambientes internos são privativos, possui cozinha
                  completa e ventiladores no quarto e sala. A casa dispõe de
                  Wifi.
                </p>

                <p>
                  Casa faz parte de um pequeno condomínio de moradores, portanto
                  é importante respeitar as regras de silêncio após as 22h e não
                  é permitido festas e eventos no local.
                </p>

                <p>
                  Não é permitido levar animais e fumar no interior da casa.
                </p>

                <strong>Acesso do hóspede</strong>

                <p>
                  A casa fica no 1° andar, com acesso apenas por escadas. A casa
                  não é indicada para pessoas com mobilidade reduzida.
                </p>
              </Description>
            </MainContent>

            <Availability />
          </RowContent>
        </Content>
      </Container>
    </>
  );
};

export default Room;
