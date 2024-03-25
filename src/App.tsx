import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle/globalStyle';
import { GlobalIconStyle } from "./assets/iconfont/iconfont";

import './App.css';
import { ThemeMode, theme_colors } from './theme/theme';
import { Wrapper } from './components/Wrapper';

function App() {

  return (
    <ThemeProvider theme={theme_colors[ThemeMode.dark]}>
      <GlobalStyle></GlobalStyle>
      <GlobalIconStyle></GlobalIconStyle>
      <Wrapper width='806px' height='890px' borderRadius='12px' theme={theme_colors[ThemeMode.dark]}></Wrapper>
    </ThemeProvider>
  );
}

export default App;
