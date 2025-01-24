"use client"

import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles/globalStyles"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

