import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25.6rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 2rem;

  > img {
    max-width: 10rem;
    margin-top: -20%;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.2rem;
`

export const Tag = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.4rem 0.8rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
`

export const ItemName = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  margin-top: 1.6rem;
`

export const ItemDescription = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-top: 0.8rem;
`
export const PriceAndControllerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3rem;
`

export const ItemPrice = styled.p`
  span {
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: 400;
  }

  font-family: 'Baloo 2';
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
  margin-right: 1.5rem;
`

export const ButtonBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.8rem;
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  transition: all 0.1s ease;

  svg {
    color: ${(props) => props.theme['white-normal']};
  }

  &:hover {
    background-color: ${(props) => props.theme['purple-normal']};
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
