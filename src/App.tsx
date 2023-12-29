import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ItemsContextProvider } from './context/ItemsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ItemsContextProvider>
          <Router />
        </ItemsContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
