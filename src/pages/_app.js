import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
