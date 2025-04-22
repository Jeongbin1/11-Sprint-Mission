import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStylex = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
  font-family: 'Pretendard';
  }
`;

export default GlobalStylex;
