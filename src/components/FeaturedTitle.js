import React from 'react';
import styled from 'styled-components';
import { Header, Countdown, Information } from './';
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  margin-left: 32px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-end;
  margin-right: 32px;
`;

export const Title = styled.div`
  font-size: 100px;
  color: #FFFFFF;
`;

const Element = styled.img`
  width: 100%;
`;

const FeaturedTitle = ({ title, posterImage, ...movie }) => (
  <Container>
    <ParallaxLayer offset={0} speed={0} style={{ backgroundImage: "url(https://silent-gianni.s3.amazonaws.com/GrandIsle_base.jpg)", backgroundSize: 'cover' }}/>
    <ParallaxLayer offset={0.0} speed={0.5}>
      <Element src="https://silent-gianni.s3.amazonaws.com/GrandIsle_cast.png" alt={title}/>
    </ParallaxLayer>
    <ParallaxLayer offset={0.0} speed={-0.5}>
      <Element src="https://silent-gianni.s3.amazonaws.com/GrandIsle_scene.png" alt={title}/>
    </ParallaxLayer>
    <ParallaxLayer offset={0.0} speed={-0.25}>
      <Element src="https://silent-gianni.s3.amazonaws.com/GrandIsle_title.png" alt={title}/>
    </ParallaxLayer>
    <ParallaxLayer offset={0.05} speed={0.5}>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
    </ParallaxLayer>
    <ParallaxLayer offset={0.80} speed={-0.5}>
      <InfoContainer>
        <Countdown/>
        <Information {...movie}/>
      </InfoContainer>
    </ParallaxLayer>
  </Container>
)

export default FeaturedTitle
