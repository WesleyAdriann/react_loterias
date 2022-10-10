import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Home  from './pages/Home'
import { GlobalStyle } from './styles'
import { theme } from './tokens'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
)
