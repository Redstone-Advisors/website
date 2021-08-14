import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    screens:{
        mobile:'576px',
        tablet:'768px',
        laptop:'992px',
        desktop:'1200px'
    },
  colors: {

  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;