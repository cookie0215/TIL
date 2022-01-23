import styled, { css } from 'styled-components';

// styled-components를 button태그에 적용시키겠다는 의미
const StyledButton = styled.button`
  background-color: transparent;
  color: tomato;
  padding: 10px 20px;
  border: 2px solid tomato;
  border-radius: 10;
  margin-right: 20px;

  ${(props) => props.primary &&
    css`
      background-color: tomato;
      color: #fff;
    `}
`;

export default StyledButton;