import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 1.2rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`
