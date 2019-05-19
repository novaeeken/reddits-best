import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.gray100};
  }
`
