import React from 'react';
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

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
    border: 2px solid; 
  }
`

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
      <>
        <Wrapper>
          <Title>
            Hello World!
          </Title>
          <Button>Normaly</Button>
          <Button primary>Primary</Button>
          <TomatoButton>Tomato</TomatoButton>

          <br />

          <Button as="a" href="#">Link with Button styles</Button>
        </Wrapper>
      </>

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

      <div>
        <Input placeholder="A bigger password input" />
        <br />
        <EmailInput size="0.5em" />
        <br />
        <PasswordInput size="1.8em" />
      </div>

      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </>
  );
};

export default StyledExample;