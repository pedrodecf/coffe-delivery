import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    'A B'
    'C B'
    'C B';
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    padding-top: 10rem;
  }
`

export const BaseContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 4rem;
  width: 100%;
  border-radius: 6px;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const InfoHeader = styled.div`
  grid-area: A;
  > h2 {
    padding: 4rem 0 1.5rem;
    font-family: 'Baloo 2';
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoContainer = styled(BaseContainer)`
  height: fit-content;
  width: 64rem;
  position: relative;

  > header {
    display: grid;
    align-items: center;
    grid-template-areas:
      'A B'
      'C D';
    grid-template-columns: min-content;

    svg {
      grid-area: A;

      color: ${(props) => props.theme['yellow-dark']};
      margin-right: 0.8rem;
    }

    h1 {
      grid-area: B;
      font-size: 1.6rem;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 130%;
      ${(props) => props.theme['base-subtitle']};
    }

    p {
      grid-area: D;
      font-size: 1.4rem;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 3.2rem;

    :nth-child(1) {
      width: 20rem;
    }

    :nth-child(2) {
      width: 100%;
    }

    :nth-child(3) {
      width: 20rem;
    }

    :nth-child(4) {
      width: 34.4rem;
      position: relative;
    }

    :nth-child(5) {
      width: 20rem;
    }

    :nth-child(6) {
      width: 27rem;
    }

    :nth-child(7) {
      width: 5.8rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > section {
      :nth-child(1) {
        width: 100%;
      }

      :nth-child(2) {
        width: 60%;
      }

      :nth-child(3) {
        width: 34%;
      }

      :nth-child(5) {
        width: 100%;
      }

      :nth-child(6) {
        width: 60%;
      }

      :nth-child(7) {
        width: 34%;
      }
    }
  }
`

export const CartHeader = styled.div`
  grid-area: B;
  > h2 {
    padding: 4rem 0 1.5rem;
    font-family: 'Baloo 2';
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    > h2 {
      padding-top: 1rem;
    }
  }
`

export const CartContainer = styled(BaseContainer)`
  height: fit-content;
  width: 44.8rem;
  border-radius: 6px 44px 6px 44px;
  padding-top: 1.6rem;

  .amountContainer {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 2.4rem;
  }

  .totalItems,
  .delivery,
  .amountFinal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .amountFinal {
    font-size: 2rem;
    font-weight: 700;
  }

  > button {
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.2rem 0.8rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-normal']};

    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['white-normal']};
    transition: all 0.1s ease;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PaymentContainer = styled(BaseContainer)`
  height: fit-content;
  width: 64rem;
  margin-top: -2rem;

  > header {
    display: grid;
    align-items: center;
    grid-template-areas:
      'A B'
      'C D';
    grid-template-columns: min-content;

    svg {
      grid-area: A;

      color: ${(props) => props.theme['purple-normal']};
      margin-right: 0.8rem;
    }

    h1 {
      grid-area: B;
      font-size: 1.6rem;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 130%;
      ${(props) => props.theme['base-subtitle']};
    }

    p {
      grid-area: D;
      font-size: 1.4rem;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  > section {
    display: flex;
    gap: 1.2rem;
    margin-top: 3.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    > section {
      flex-direction: column;
    }
  }
`

interface PaymentMethodProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

export const PaymentMethod = styled.button<PaymentMethodProps>`
  padding: 1.6rem;
  background: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border-radius: 6px;
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.selected
        ? props.theme['purple-normal']
        : props.theme['base-button']};

  &:hover {
    background: ${(props) => (props.selected ? '' : props.theme['base-hover'])};
  }

  > svg {
    color: ${(props) => props.theme['purple-normal']};
  }

  > p {
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`
