import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

/*
// 버튼의 props 기본값 (props를 따로 작성하지 않더라도 기본값으로 해당 스타일을 적용해준다!)
Button.defaultProps = {
  theme: {
    main: "red"
  }
}
*/

const defaultTheme = {
  main: "green"
};

const redTheme = {
  main: "red"
}


const ThemeExample = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const redClick = () => {
    setTheme(redTheme)
  }
  const greenClick = () => {
    setTheme(defaultTheme)
  }

  return (
    <div>
      <div>
        <button onClick={redClick}>red로 변경</button>
        <button onClick={greenClick}>green으로 변경</button>
      </div>

      <ThemeProvider theme={theme}>
        <Button>Normal</Button>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
};

export default ThemeExample;