import { createGlobalStyle } from 'styled-components';
/** reset css */
const theme = {
    color: {
      textColor: '#24292e',
      secondaryTextColor: '#586069',
      headerBgColor: '#24292e',
      shadeBgColor: '#f6f8fa',
      hoverBgColor: '#f3f4f6',
      counterBgColor: 'rgba(209, 213, 218, 0.5)',
      borderColor: '#e1e4e8',
      borderColorPrimary: `rgba(27, 31, 35, 0.15)`,
      secondaryBorderColor: '#eaecef',
      iconColor: '#959da5',
      whiteColor: '#fff',
      blueColor: '#0366d6',
      lightBlueColor: '#0f6fdd',
      greenColor: '#2ea44f',
      lightGreenColor: '#28a745',
      redColor: '#cb2431',
      grayColor: '#c0c1c2',
      blackColor: '#000000',
      inputContrast: '#fafbfc',
      mainCommentHeadColor: '#f1f8ff',
    },
    fontSize: {
      xl: '32px',
      lg: '20px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
  };
  
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    color: inherit;
    outline: 0;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    color: black;
    font-size: 100%;
    line-height: 1.2;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
  
  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export { theme,GlobalStyle };
