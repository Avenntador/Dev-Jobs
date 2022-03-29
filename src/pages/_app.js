import "../sass/core/_reset.scss";
import React from "react";
import { useEffect } from "react";
import * as themes from "../themes/theme.json";
import { useTheme } from "../themes/useTheme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/GlobalStyles";
import { ThemeContext } from "../themes/themeContext";
import { setToLS } from "../utils/localStorage";

export default function DevJobsApp({ Component, pageProps }) {
  const { theme, switchTheme } = useTheme();

  useEffect(() => {
    setToLS("all-themes", themes.default);
  }, []);

  return (
    <>
      {theme && (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ThemeContext.Provider value={switchTheme}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}
