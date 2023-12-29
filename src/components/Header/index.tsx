import {
  HeaderContainer,
  InfoContainer,
  CityContainer,
  CartContainer,
} from './styles'
import logoCoffeDelivery from '../../../public/logo-coffe-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext'

export function Header() {
  const navigate = useNavigate()
  const { itemsOnCart } = useContext(ItemsContext)

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  function handleNavigateToHome() {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <img
        src={logoCoffeDelivery}
        alt=""
        onClick={handleNavigateToHome}
        title="Coffe Delivery"
      />
      <InfoContainer>
        <CityContainer>
          <MapPin size={22} weight="fill" />
          <span>Ribeirão Preto, SP</span>
        </CityContainer>
        <CartContainer
          onClick={handleNavigateToCheckout}
          title="Carrinho de compras"
        >
          {itemsOnCart.length > 0 ? (
            <div className="itemsQuantity">{itemsOnCart.length}</div>
          ) : (
            ''
          )}

          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}
