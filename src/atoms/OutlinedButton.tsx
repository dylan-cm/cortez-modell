import React, { FC } from 'react'
import styled from '../styles/styled'
import * as Styles from '../styles'

const S: Styles.Component = Styles
S.Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px 18px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.color.primary};
  font-size: 1.15rem;
  min-width: 44px;
  background-color: ${(props: any) => (props.transparent ? 'transparent' : props.theme.color.negative)};
  color: ${(props: any) => (props.transparent ? props.theme.color.negative : props.theme.color.primary)};
  font-family: 'eurostile', sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: 250ms;

  &:hover {
    color: ${(props) => props.theme.color.negative};
    background-color: ${(props) => props.theme.color.primary};

    svg {
      fill: ${(props) => props.theme.color.negative};
    }
  }

  svg {
    fill: ${(props: any) => (props.transparent ? props.theme.color.negative : props.theme.color.primary)};
    height: 1.5rem;
    padding-right: ${(props: any) => (props.end ? '' : '8px')};
    padding-left: ${(props: any) => (props.end ? '8px' : '')};
    transition: 250ms;
  }
`

interface ButtonProps {
  end?: boolean
  transparent?: boolean
}

const OutlinedButton: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>
}

export default OutlinedButton
