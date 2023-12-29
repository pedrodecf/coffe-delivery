import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;

  > img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 3.2rem 2rem 3.2rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.theme['white-normal']};
    width: 100%;
    z-index: 1;
    filter: drop-shadow(0px 1px 3px rgba(204, 204, 204, 0.5));
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

export const CityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-light']};
  padding: 0.8rem;
  gap: 0.4rem;
  border-radius: 6px;
  cursor: pointer;

  span {
    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme['purple-normal']};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  .itemsQuantity {
    position: absolute;
    background: ${(props) => props.theme['yellow-dark']};

    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    top: -8px;
    right: -8px;
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;
    color: ${(props) => props.theme['white-normal']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
