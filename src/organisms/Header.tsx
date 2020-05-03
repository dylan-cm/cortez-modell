import React from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'
import { ReactComponent as Logo } from '../assets/logo.svg'
import OutlinedButton from '../atoms/OutlinedButton'

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
        <OutlinedButton children="Say Hello" onClick={() => window.open('mailto:dylan@cortez-modell.com')} />
      </div>
    </S.Header>
  )
}

export default Header
