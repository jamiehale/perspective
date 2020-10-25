import React, { useState } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import nerdsBack from './assets/nerds_back.svg';
import nerdsMiddle from './assets/nerds_middle.svg';
import nerdsTop from './assets/nerds_top.svg';
import saon from './assets/saon.svg';

const TitleImg = styled.img``;

const Container = styled(({ perspective, ...props }) => <div {...props} />)`

  header {
    position: relative;
    min-height: 100vh;
    width: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 50% 50% 0px;
  }

  section {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background-color: lightgreen;

    h1 {
      font-size: 4rem;
    }
  }
`;

const ImageBundle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transform-origin: inherit;
`;

const BackgroundLayerImg = styled.img`
`;

const MiddleLayerImg = styled.img`
`;

const TopLayerImg = styled.img`
`;

const LayerBundle = styled(({ translateZ, scale, ...props }) => <div {...props} />)`
  position: relative;
  transform-origin: inherit;

  ${BackgroundLayerImg} {
    transform-origin: inherit;
    position: absolute;
    height: 60vh;
    z-index: -3;
  }

  ${MiddleLayerImg} {
    transform-origin: inherit;
    position: absolute;
    height: 60vh;
    z-index: -2;
    transform: translate(110px, 0px) translateZ(3px) scale(0.9);
  }

  ${TopLayerImg} {
    transform-origin: inherit;
    height: calc(40vh + 5vw);
    z-index: -1;
    transform: translate(0px, 0px) translateZ(6px) scale(0.5);
  }
`;

const TitleBundle = styled.div`
  position: relative;
  margin-left: 120px;
  display: flex;
  align-items: flex-end;

  ${TitleImg} {
    margin-top: 76px;
    height: calc(10vh + 5vw);
    transform: translate(0px, 0px) translateZ(6px) scale(0.5);
  }
`;

const Controls = styled.div`
  border: 2px solid black;
  top: 8px;
  left: 8px;
  width: 50vw;
`;

const passSecondArg = f => R.compose(
  f,
  R.nthArg(1),
);

/*
      <Controls>
        <div style={{ position: 'relative' }}>
        <Typography>{perspective}</Typography>
        <Slider value={perspective} onChange={passSecondArg(setPerspective)} />
        <Typography>{translateZValue.toFixed(2)}/{scaleValue.toFixed(2)}</Typography>
        <Slider value={translateZ} onChange={passSecondArg(setTranslateZ)} />
        </div>
      </Controls>
*/

const App = () => {
  return (
    <Container>
      <header>
        <ImageBundle>
          <LayerBundle>
            <BackgroundLayerImg src={nerdsBack} />
            <MiddleLayerImg src={nerdsMiddle} />
            <TopLayerImg src={nerdsTop} />
          </LayerBundle>
          <TitleBundle>
            <TitleImg src={saon} />
          </TitleBundle>
        </ImageBundle>
      </header>
      <section>
        <h1>This</h1>
      </section>
    </Container>
  );
};

export default App;
