import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'
import headshot from '../assets/headshot.svg'
import illustration from '../assets/illustration.svg'
import dmc from '../assets/dmc.svg'
import AnimatedCursor from '../atoms/AnimatedCursor'

const S: Styles.Component = Styles
S.Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  min-height: Calc(100vh - 115px);
    /* ${(props) => props.theme.layout.headerHeightDesktop}); */

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
    margin-bottom: 48px;
    font-family: 'ITC Avant Garde Gothic Pro', sans-serif
  }

  div.bottomBar {
    min-height: 24px;
    max-height: 5vh;
    width: 100%;
    background-color: ${(props) => props.theme.color.primary};
  }

  #hero-illustration {
    margin-bottom: -4px;
    height: 260px;
  }

  div.hero-body{
    padding: 32px;
  }

  .headshot{
    width: 240px;
  }
  .pattern-wrapper{
    margin: -10%;
    position: absolute;
    width: 110%;
    height: 110%;
    overflow: hidden;
  }
  .pattern{
    position: absolute;
    width: 110%;
    height: 110%;
    z-index: -10;
    background: url(${dmc});
    background-repeat: repeat;
    background-size: 10%;
    fill: ${(props) => props.theme.color.primary};
  }



  @media screen and (max-width: 800px) {
      .pattern, .pattern-wrapper{
        display: none;
      }
      #hero-illustration{
        max-width: 80%;
        height: auto;
      }
    }
`

function Hero() {
  return (
    <S.Hero>
      <div className="pattern-wrapper">
        <div className="pattern" />
        <AnimatedCursor />
      </div>
      <div className="hero-body">
        <h1>Designer, Full-Stack Developer & Consultant</h1>
        <h3>I design and build simply useful things, and I love what I do.</h3>
        {/* Headshot */}
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <div>
        {/* Illustration */}
        <img src={illustration} alt="headshot" id="hero-illustration" />
        {/* Down arrow button */}
        <div className="bottomBar"></div>
      </div>
    </S.Hero>
  )
}

export default Hero
