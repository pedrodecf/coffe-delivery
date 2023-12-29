import {
  SuccessContainer,
  FinishedContainer,
  CustomerInfoContainer,
  CustomerInfo,
} from './styles'
import deliveryImg from '../../../public/success-img.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext'

export function Success() {
  const {
    orderPaymentMethod,
    orderRua,
    orderNumero,
    orderBairro,
    orderCidade,
    orderUf,
  } = useContext(ItemsContext)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <FinishedContainer>
        <CustomerInfoContainer>
          <CustomerInfo>
            <div className="svgContainer">
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              Entrega em
              <strong>
                {orderRua}, {orderNumero}
              </strong>
            </p>
            <p>
              {orderBairro} - {orderCidade}, {orderUf.toUpperCase()}
            </p>
          </CustomerInfo>
          <CustomerInfo>
            <div className="svgContainer">
              <Timer size={16} weight="fill" />
            </div>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min </strong>
            </p>
          </CustomerInfo>
          <CustomerInfo>
            <div className="svgContainer">
              <CurrencyDollar size={16} />
            </div>
            <p>Pagamento na entrega</p>
            <p>
              <strong>{orderPaymentMethod || 'Não informado'}</strong>
            </p>
          </CustomerInfo>
        </CustomerInfoContainer>
        <img src={deliveryImg} alt="" />
      </FinishedContainer>
    </SuccessContainer>
  )
}
