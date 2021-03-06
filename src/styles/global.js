import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  :root {
    --dm-elements-dark-blue: hsl(209, 23%, 22%);
    --dm-bg-very-dark-blue: hsl(207, 26%, 17%);
    --lm-text-very-dark: hsl(200, 15%, 8%);
    --lm-input-dark-gray: hsl(0, 0%, 52%);
    --lm-bg-very-gray: hsl(0, 0%, 98%);
    --dm-text-lm-elements-white: hsl(0, 0%, 100%);
    --webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.54);
    --moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.54);
    --box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.54);
  }

  a {
    text-decoration: none;
  }
  
  .none {
    display: none;
  }
`