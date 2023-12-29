import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 58.8rem 47.6rem;
  gap: 5.6rem;
  margin: 9.2rem 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin: 4rem 0 0;

    .imgIntroContainer {
      img {
        display: none;
      }
    }
  }
`

export const TextIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.2rem;
      line-height: 100%;
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
      line-height: 100%;
      text-align: center;
    }
  }
`

export const InfoFromTextIntroContainer = styled.div`
  margin-top: 4.6rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  margin-top: 2rem;

  p {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    margin-top: 0rem;

    p {
      font-size: 1.4rem;
      line-height: 120%;
    }
  }
`
const BG_COLORS = {
  yellowDark: 'yellow-dark',
  yellowNormal: 'yellow-normal',
  baseText: 'base-text',
  purpleNormal: 'purple-normal',
}

interface IconProps {
  $bgcolor: 'yellowDark' | 'yellowNormal' | 'baseText' | 'purpleNormal'
}

export const IconContainer = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 50%;
  background: ${(props) => props.theme[BG_COLORS[props.$bgcolor]]};

  svg {
    color: ${(props) => props.theme['white-normal']};
  }
`
