import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#f4f4f4",
    text: "#333333",
    lightText: "#666666",
    white: "#ffffff",
    error: "#e74c3c",
    success: "#27ae60",
  },
  fonts: {
    main: "'Inter', sans-serif",
  },
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  // * {
  //   box-sizing: border-box;
  //   margin: 0;
  //   padding: 0;
  // }

  // body {
  //   font-family: ${theme.fonts.main};
  //   background-color: ${theme.colors.background};
  //   color: ${theme.colors.text};
  //   line-height: 1.6;
  // }

  // a {
  //   color: ${theme.colors.primary};
  //   text-decoration: none;
  // }
`


