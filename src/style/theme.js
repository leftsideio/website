import { ThemeProvider } from "styled-components"

const Provider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

const theme = {
  colors: {},
}

export { theme, Provider }
