// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from 'styled-components'
import { defaultTheme } from '../styles/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
