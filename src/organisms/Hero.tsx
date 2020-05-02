import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'
import headshot from '../assets/headshot.svg'
import illustration from '../assets/illustration.svg'

const S: Styles.Component = Styles
S.Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  min-height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  div.bottomBar {
    min-height: 40px;
    max-height: 5vh;
    width: 100%;
    background-color: ${(props) => props.theme.color.primary};
  }

  #hero-illustration {
    margin-bottom: -4px;
  }
`

function Hero() {
  return (
    <S.Hero>
      <div>
        <h1>Designer, Full-Stack Developer, Consultant</h1>
        <h3>I design and build simply useful things, and I love what I do.</h3>
      </div>
      {/* Headshot */}
      <img src={headshot} alt="headshot" />
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
