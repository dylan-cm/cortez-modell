import { keyframes } from '@emotion/core'
// import styled from '@emotion/styled'
export interface Theme {
  color: {
    [key: string]: string | number
  }
  layout: {
    [key: string]: string | number
  }
  text: {
    [key: string]: string | number
  }
}

export const theme: Theme = {
  color: {
    primary: '#7511F7',
  },
  layout: {},
  text: {},
}

export interface Component {
  [key: string]: any
}

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
