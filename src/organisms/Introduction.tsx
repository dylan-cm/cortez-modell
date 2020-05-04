import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'

import { ReactComponent as Designer } from '../assets/designer.svg'
import { ReactComponent as FrontEnd } from '../assets/frontend.svg'
import { ReactComponent as Mentor } from '../assets/mentor.svg'

const S: Styles.Component = Styles
S.Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;
  width: 100vw;

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 8px;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: ${(props) => props.theme.color.primary};
    font-family: itc-avant-garde-gothic-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  h6 {
    max-width: 800px;
    font-size: 1.15rem;
    line-height: 1.5rem;
    margin: 0;
    font-family: itc-avant-garde-gothic-pro, sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  div.intro-text {
    color: ${(props) => props.theme.color.negative};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
  }

  div.color-bar {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 640px;
    background: ${(props) => props.theme.color.primary};
  }

  div.column-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;

    color: ${(props) => props.theme.color.positive};
    max-width: 1000px;
    background: ${(props) => props.theme.color.negative};
    border: 1px solid #eee;
    border-radius: 10px;

    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

    padding: 48px 48px;
    margin: 124px 16px;
    box-sizing: border-box;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    @media screen and (max-width: 275px) {
      padding: 16px;
    }

    div.column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      padding: 0 16px;
      box-sizing: border-box;
    }

    div.divider {
      width: 1px;
      background: #b3a9b0;

      @media screen and (max-width: 800px) {
        height: 1px;
        width: 100%;
        margin: 48px 0;
      }
    }
  }

  .icon {
    height: 48px;
    margin-bottom: 24px;
  }
`

function Introduction() {
  return (
    <S.Introduction>
      <div className="color-bar" />
      <div className="intro-text">
        <h2>Hi, I'm Dylan. Nice to meet you.</h2>
        <h6>
          Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies,
          consulted for startuh6s, and collaborated with talented people to create digital products for both business
          and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one
          design problem at a time.
        </h6>
      </div>
      <div className="column-card">
        <div className="column">
          <Designer className="icon" />
          <h4>Designer</h4>
          <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          <h5>Things I enjoy designing:</h5>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <h5>Design Tools:</h5>
          <p>Balsamiq Mockups</p>
          <p>Figma</p>
          <p>Invision</p>
          <p>Marvel</p>
          <p>Pen & Paper</p>
          <p>Sketch</p>
          <p>Webflow</p>
          <p>Zeplin</p>
        </div>
        <div className="divider" />
        <div className="column">
          <FrontEnd className="icon" />
          <h4>Developer</h4>
          <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          <h5>Things I enjoy designing:</h5>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <h5>Design Tools:</h5>
          <p>Balsamiq Mockups</p>
          <p>Figma</p>
          <p>Invision</p>
          <p>Marvel</p>
          <p>Pen & Paper</p>
          <p>Sketch</p>
          <p>Webflow</p>
          <p>Zeplin</p>
        </div>
        <div className="divider" />
        <div className="column">
          <Mentor className="icon" />
          <h4>Consultant</h4>
          <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          <h5>Things I enjoy designing:</h5>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <h5>Design Tools:</h5>
          <p>Balsamiq Mockups</p>
          <p>Figma</p>
          <p>Invision</p>
          <p>Marvel</p>
          <p>Pen & Paper</p>
          <p>Sketch</p>
          <p>Webflow</p>
          <p>Zeplin</p>
        </div>
      </div>
    </S.Introduction>
  )
}

export default Introduction
