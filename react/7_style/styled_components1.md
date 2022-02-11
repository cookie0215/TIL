# [TIL] React_Styled Components

[기본 CSS & CSS Module](https://github.com/cookie0215/TIL/blob/main/react/7_style/react_style.md)           
[Emotion](https://github.com/cookie0215/TIL/blob/main/react/7_style/emotion.md)   

<br />

## css in JS : styled-components 방식

*[styled-components 공식 사이트](https://styled-components.com/)*

- Styled-Components 라이브러리 이용해서 컴포넌트에 스타일을 적용    
  → 템플릿 리터럴과 CSS의 기능을 활용하여 실제 CSS 코드를 작성하여 구성 요소의 스타일을 지정     

- css를 js와 분리시키지 않고 js파일(컴포넌트) 내에서 스타일을 관리할 수 있다.   
  → 하나의 파일 안에 style을 지정한 컴포넌트를 만든다.   

- 🧡 반드시 styled-component를 만들 때 화면에 렌더링해주는 컴포넌트 밖에다가 작성해야 한다!!
  → 화면에 렌더링되는 컴포넌트는 state나 props가 변경될 때마다 렌더링되는데,     
    그 안에 styled-component까지 들어 있다면 리렌더링될 때 성능을 떨어뜨릴 수 있다.

- CSS Moudule 처럼 개발자도구에서 각 컴포넌트에 **고유의 className이 부여**되기 때문에 스타일코드가 중복 오염될 일이 거의 없다.

- hover 또는 가상클래스를 `&`를 통해 적용할 수 있다.

- props를 활용해서 스타일을 적용할 수 있다.

- as속성 활용해서 태그또는 컴포넌트를 연결해서 응용할 수 있다.    
  ex) `<Button as={"a"} href="#">` 만들어둔 button styled-components에 `as="a" href="#"` 속성을 붙여서 button태그가 a태그의 기능도 할 수 있도록 만들 수 있다.(링크 이동 가능)

- input태그 등 기본적으로 갖고 있는 html속성 스타일을 `attr`을 활용해 변경할 수 있다.

- `keyframes`를 통해 css 애니메이션을 구현할 수 있다.   
  → `import styled, { keyframes } from "styled-components";`를 작성해줘야 에러없이 적용할 수 있다!

<br />
<br />
<br />

## styled-components 사용 방법

1. `npm i styled-components`   
  : 해당 프로젝트 터미널에 styled-components 라이브러리를 설치한다.

2. `import styled from "styled-components";`    
  : 해당 컴포넌트에 import로 설치된 styled-components 라이브러리를 가져온다. 

<br />

### [styled-components에서 reset파일 적용하기](https://github.com/cookie0215/TIL/blob/main/react/7_style/styled_components2.md)

<br />
<br />

***[예제1] styled-component를 사용한 예제***

```jsx
import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledExample = () => {
  return (
    <Wrapper>
      <Title>
        Hello World!
      </Title>
    </Wrapper>
  );
};

export default StyledExample;
```
![image](https://user-images.githubusercontent.com/81572770/150685622-0654e411-0012-4820-98f5-e7cb483b9f84.png)

→ Title 이라는 컴포넌트를 스타일이 적용될 수 있도록 만들었고,   
  `<h1>` className이 고유한 이름으로 생성된 것을 볼 수 있다.

<br />

***[예제2] props를 적용한 버튼과 Extending(상속된) 버튼 예제***

```jsx
import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const StyledExample = () => {
  return (
    <>
      <Button>Normaly</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato</TomatoButton>
    </>
  );
};

export default StyledExample;
```
![image](https://user-images.githubusercontent.com/81572770/150686179-36b3fec6-95cb-4eba-89cf-3c4cf050c490.png)

→ 삼항 연산자를 활용해 props가 있는 버튼의 스타일을 원하는 대로 변경할 수 있으며,     
  또한 TomatoButton 처럼 미리 만들어진 button스타일에 컴포넌트 이름만 변경해서 일부 스타일을 변경할 수 있다!!

<br />

***[예제3] 가상 클래스 적용한 예제***

```jsx
import React from 'react';
import styled from "styled-components";

const Thing = styled.div`
  color: blue;

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }
`

const StyledExample = () => {
  return (
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </>
  );
};

export default StyledExample;
```

![image](https://user-images.githubusercontent.com/81572770/150687347-071b1b3f-3863-46e3-b9d2-4f2f1c6aaa6c.png)


1) `& ~ &` : 현재 `<Thing>`을 기준으로 그 다음요소부터 마지막 `<Thing>`컴포넌트까지 스타일을 적용
2) `& + &` : 현재 `<Thing>` 의 바로 다음 요소인 `<Thing>`컴포넌트를 의미

    → 원래 <Thing>컴포넌트는 `& ~ &`에 의해 배경색이 tomato가 되어야 하는데, 우선 순위에 의해 스타일이 덮어씌워진 것이다!

<br />

***[예제4] html태그가 가진 html속성 스타일을 변경한 예제***

```jsx
import React from 'react';
import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const EmailInput = styled(Input).attrs({
  placeholder: "Write youer e-mail...",
})`
  color: green;
  font-weight: bold;
`;
const PasswordInput = styled(Input).attrs({
  type: "password",
  placeholder: "Write youer password...",
})`
  border: 2px solid aqua;
`;

const StyledExample = () => {
  return (
      <div>
        <Input placeholder="A bigger password input"/>
        <br />
        <EmailInput size="0.5em" />
        <br />
        <PasswordInput size="1.8em" />
      </div>
  );
};

export default StyledExample;
```
![image](https://user-images.githubusercontent.com/81572770/150687983-83a6ade8-7f31-4341-b738-813b629be5ea.png)

<br />

***[예제5] css 애니메이션 만들기***

```jsx
import React from 'react';
import styled, { keyframes } from "styled-components";

// 애니메이션 구현
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledExample = () => {
  return (
    <>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </>
  );
};

export default StyledExample;
```
→ keyframes는 작성한 애니메이션을 원하는대로 동작할 수 있도록 도와주는 역할을 한다. 

<br />
<br />