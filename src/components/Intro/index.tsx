import {
  IntroContainer,
  TextIntroContainer,
  InfoFromTextIntroContainer,
  InfoContainer,
  IconContainer,
} from './styles'
import introImg from '../../../public/intro-img.png'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

export function Intro() {
  return (
    <IntroContainer>
      <TextIntroContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <InfoFromTextIntroContainer>
          <InfoContainer>
            <IconContainer $bgcolor="yellowDark">
              <ShoppingCart size={16} weight="fill" />
            </IconContainer>
            <p>Compra simples e segura</p>
          </InfoContainer>

          <InfoContainer>
            <IconContainer $bgcolor="baseText">
              <Package size={16} weight="fill" />
            </IconContainer>
            <p>Embalagem mantém o café intacto</p>
          </InfoContainer>

          <InfoContainer>
            <IconContainer $bgcolor="yellowNormal">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <p>Entrega rápida e rastreada</p>
          </InfoContainer>

          <InfoContainer>
            <IconContainer $bgcolor="purpleNormal">
              <Coffee size={16} weight="fill" />
            </IconContainer>
            <p>O café chega fresquinho até você</p>
          </InfoContainer>
        </InfoFromTextIntroContainer>
      </TextIntroContainer>
      <div className="imgIntroContainer">
        <img
          src={introImg}
          alt="Uma ilustração de um copo de café da marca Coffe Delivery, com alguns grãos de café."
        />
      </div>
    </IntroContainer>
  )
}
