import styled from 'styled-components'

export const ItemOnCartContainer = styled.div`
  display: grid;
  grid-template-columns: 6.4rem 1fr 6.4rem;
  gap: 2rem;
  padding: 2.4rem 0.4rem;
  background: ${(props) => props.theme['base-card']};
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  @media (max-width: 768px) {
    grid-template-columns: 20% 50% 20%;
  }
`

export const ImgContainer = styled.div`
  > img {
    max-width: 6.4rem;
  }
`

export const NameAndControllerAndRemoveButtonContainer = styled.div`
  display: grid;
  grid-template-areas:
    'A A'
    'B C';
  gap: 0.8rem;

  > p {
    grid-area: A;
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > button {
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};

    > svg {
      color: ${(props) => props.theme['purple-normal']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};

      > svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

export const PriceContainer = styled.div`
  p {
    text-align: right;
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AmountControllerContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  padding: 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 7.2rem;
  gap: 0.6rem;

  > span {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  > button {
    background: none;
    border: none;

    svg {
      color: ${(props) => props.theme['purple-normal']};
    }
  }

  > button:hover {
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
