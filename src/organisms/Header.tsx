import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'
import { ReactComponent as Logo } from '../assets/logo.svg'

const S: Styles.Component = Styles
S.Header = styled.div`
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.theme.layout.headerHeightDesktop};
  width: 100%;

  padding: 16px 48px;
  box-sizing: border-box;

  button.outline {
    padding: 8px 18px;
    border-radius: 100px;
    border: 2px solid ${(props) => props.theme.color.primary};
    font-size: 1.15rem;
    min-width: 44px;
    color: ${(props) => props.theme.color.primary};
    font-family: 'eurostile', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: 250ms;

    &:hover {
      color: ${(props) => props.theme.color.negative};
      background-color: ${(props) => props.theme.color.primary};
    }
  }

  .logo {
    height: 60%;
    fill: ${(props) => props.theme.color.primary};
    transition: 250ms;
    cursor: pointer;

    &:hover {
      fill: ${(props) => props.theme.color.positive};
    }
  }

  div.nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 1344px;
  }
`

function Header() {
  return (
    <S.Header>
      <div className="nav-wrapper">
        {/* Logo */}
        <Logo className="logo" />
        {/* Contact */}
        <button className="outline">Say Hello</button>
      </div>
    </S.Header>
  )
}

export default Header
