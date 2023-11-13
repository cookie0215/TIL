# [TIL] React_Styled Components : reset & theme
styled-components는 각각 다른 컴포넌트들에게 스타일 영향을 주지 않도록 하기 위해 Local로 동작된다.   

하지만 프로젝트 작업 전 스타일을 초기화해서 작업해야 하는 경우, Global로 스타일을 설정할 수 있도록 만들어야 한다.

<br />
<br />

## Styled Components에서 전역적으로 reset 설정하기

<br />

1. `npm i styled-components` 와 `npm i styled-reset` 을 설치    
  : 해당 프로젝트 터미널에 styled-components 라이브러리를 설치한다.

2. `style.js` 파일 생성

3. `style.js`에 설치한 라이브러리를 가져오기
  
    ```javascript
    /* style.js */

    import { createGlobalStyle } from 'styled-components';
    import reset from 'styled-reset';
    ```

4. `style.js`에 `GlobalStyles`라는 컴포넌트를 만들어 `${reset}`을 작성한다.

    ```javascript
    /* style.js */

    const GlobalStyle = createGlobalStyle`
      ${reset}

      html { font-size: 10px; }
      body { font-size: 1rem; }
    `;

    export default GlobalStyle;
    ```
    → reset에 적용된 스타일외에 전역적으로 스타일을 관리하고 싶은 게 있다면 GlobalStyle 컴포넌트 안에 추가해서 작성하면 된다.

    <br />

5. `App.js`파일에 만든 `GlobalStyle`컴포넌트를 연결해준다.   
    가장 상단에 위치하도록 배치해야 한다!   
    (`App.js` 대신 `index.js`에 지정해도 괜찮다.)

    ```javascript
    /* App.js */

    import GlobalStyle from './styles'

    const App = () => {
      return (
        <>
          <GlobalStyle />
          <div className="App">
          </div>
        </>
      );
    }

    export default App;
    ```

6. 크롬 개발자 도구에서 추가된 reset 스타일을 확인할 수 있다.

    ![image](https://user-images.githubusercontent.com/81572770/153545399-8c24ee9e-301e-4fc7-94dd-a455d2280813.png)

<br />
<br />
<br />

## Styled Components에서 전역적으로 theme 설정하기

<br />

> ### theme란?
>
> - 프로젝트 전체에서 사용할 목적의 **변수 모음 객체**를 의미   
> - 자주 사용하는 색상 코드, 사이즈, 폰트, 미디어 쿼리 등의 정보를    
> **변수로 생성해 사용하면 일관적인 스타일 관리가 가능**하다.

<br />
<br />

1. `theme.js`파일 생성

2. `theme.js`에 지정해줄 스타일 요소들을 작성한다.

    ```javascript
    /* theme.js */

    // px단위 대신 rem으로 설정하고 싶을 때 사용
    const calcRem = (size) => `${size / 16}rem`;

    const font = {
      family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`,
      },
      size: {
        small: calcRem(14),
        base: calcRem(16),
        lg: calcRem(18),
        xl: calcRem(20),
        xxl: calcRem(22),
        xxxl: calcRem(24),
        titleSize: calcRem(50),
      },
      weight: {
        light: 100,
        normal: 400,
        bold: 700,
      },
    };

    const paddings = {
      small: calcRem(8),
      base: calcRem(10),
      lg: calcRem(12),
      xl: calcRem(14),
      xxl: calcRem(16),
      xxxl: calcRem(18),
    };

    const margins = {
      small: calcRem(8),
      base: calcRem(10),
      lg: calcRem(12),
      xl: calcRem(14),
      xxl: calcRem(16),
      xxxl: calcRem(18),
    };

    const deviceSizes = {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "450px",
      tablet: "768px",
      tabletL: "1024px",
      desktop: "1440px",
    };

    const colors = {
      black: "#000000",
      white: "#FFFFFF",
      gray1: "#222222",
      gray2: "#767676",
      green1: "#3cb46e",
    };

    const device = {
      mobileS: `@media only screen and (max-width: ${deviceSizes.mobileS})`,
      mobileM: `@media only screen and (max-width: ${deviceSizes.mobileM})`,
      mobileL: `@media only screen and (max-width: ${deviceSizes.mobileL})`,
      tablet: `@media only screen and (max-width: ${deviceSizes.tablet})`,
      tabletL: `@media only screen and (max-width: ${deviceSizes.tabletL})`,
      desktop: `@media only screen and (max-width: ${deviceSizes.desktop})`,
    };

    const theme = {
      font,
      colors,
      deviceSizes,
      device,
      paddings,
      margins,
      gradient,
    };

    export default theme;
    ```
<br />

3. `App.js`에  `theme.js`파일과 `import { ThemeProvider } from "styled-components";`를 연결한다.   
  : `ThemeProvider`는 context API를 처럼 동작하는데,   
    `ThemeProvider`로 감싸진 자식 Component들은 `ThemeProvider`로 전달 받은 theme를 props로 전달 받아서 사용한다.

    ```javascript
    /* App.js */

    import GlobalStyle from './styles/globalStyles';
    import { ThemeProvider } from "styled-components";
    import theme from './styles/theme';
    import Button from './components/Button';

    const App = () => {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <div className="App">
              <Button />
            </div>
          </ThemeProvider>
        </>
      );
    }

    export default App;
    ```

<br />

4. 해당 요소에 스타일을 적용할 때 props를 사용해서 값이 전달받을 수 있도록 작성한다.

    ```javascript
    /* Button.js */

    import React from 'react';
    import styled from 'styled-components';

    const Btn = styled.button`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.green1};
      font-size: ${({ theme }) => theme.font.size.xxxl};
    `;

    const Button = () => {
      return (
        <>
          <Btn>클릭</Btn>
        </>
      );
    };

    export default Button;
    ```

<br />
<br />