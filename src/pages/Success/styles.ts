import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 8rem;

  > h1 {
    font-family: 'Baloo 2';
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    padding: 0 2rem;
    padding-top: 10rem;

    > h1 {
      font-size: 2.8rem;
    }

    > p {
      font-size: 1.8rem;
    }
  }
`

export const FinishedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  > img {
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > img {
      display: none;
    }
  }
`

export const CustomerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem;
  width: 52.6rem;
  position: relative;
  padding: 4rem;
  background: ${(props) => props.theme['white-normal']};
  border-radius: 6px 36px 6px 36px;

  &::after {
    content: '';
    position: absolute;
    top: -1.6px;
    left: -2px;
    width: 100.8%;
    height: 101.2%;
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
    border-radius: 8px 38px 8px 38px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`

export const CustomerInfo = styled.div`
  display: grid;
  grid-template:
    'a b'
    'a c';
  grid-template-columns: min-content;
  align-items: center;

  > p {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    > strong {
      &::before {
        content: ' ';
      }
    }
  }

  .svgContainer {
    grid-area: a;
    margin-right: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    background: ${(props) => props.theme['yellow-normal']};
    padding: 0.8rem;
    color: ${(props) => props.theme['white-normal']};
  }

  > p:last-child {
    grid-area: c;
  }
`
