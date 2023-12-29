import styled from 'styled-components'

export const HomeContainer = styled.div`
  .nossosCafes {
    font-family: 'Baloo 2';
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 5.4rem;
  }

  @media (max-width: 768px) {
    padding-top: 10rem;
    .nossosCafes {
      text-align: center;
    }
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
