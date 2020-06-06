import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import contribQualityLevels from 'videojs-contrib-quality-levels';
import '../stylesheets/video.css';
import Header from './Header';
import { Title } from './FeaturedTitle';
import Countdown from './Countdown';

const options = {
  fill: true,
  controls: true,
  sources: [{
    src: 'https://stream.mux.com/EqXKf5xIIIkseInJ1Rq1wQ1o023y01leBZ7TIWS4wDPlo.m3u8',
    type: 'application/x-mpegURL'
  }],
  plugins: {}
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  background-color: #000000;
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 40px;
  left: 80px;
`;

const TitleOverlay = styled.div`
  position: absolute;
  bottom: 40px;
  left: 80px;
`;

const Player = ({ title, posterImage, year, duration }) => {
  const [display, setDisplay] = useState(true)
  const playerRef = useRef();

  useEffect(() => {
    videojs.registerPlugin('qualityLevels', contribQualityLevels);

    const player = videojs(playerRef.current,
      {
        ...options,
        poster: posterImage
      }, () => {
      console.log('onPlayerReady')
    });

    player.on('play', () => {
      setDisplay(false)
    });

    player.on('pause', () => {
      setDisplay(true)
    });

    return () => {
      player.dispose();
    };
  }, [])

  return (
    <Container>
      <div data-vjs-player>
        <video ref={playerRef} className="vjs-matrix video-js"/>
      </div>
      { display && (
        <HeaderOverlay>
          <Header/>
        </HeaderOverlay>
      )}
      { display && (
        <TitleOverlay>
          <Title>{ title }</Title>
          <Countdown/>
        </TitleOverlay>
      )}
    </Container>
  )
}

export default Player
