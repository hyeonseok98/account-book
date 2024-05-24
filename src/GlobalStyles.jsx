import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* css 초기화 */
* {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}

*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.5;
  overflow-wrap: break-word;
}

#root {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body {
  height: 100%;
  font-size: 62.5%;
}

body {
  background-color: #2ec4b6;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}
`;

export default GlobalStyles;
