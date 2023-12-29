import {
  CheckoutContainer,
  InfoHeader,
  CartHeader,
  InfoContainer,
  CartContainer,
  PaymentContainer,
  PaymentMethod,
} from './styles'
import { Input } from '../../components/Input'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { ItemOnCart } from '../../components/ItemOnCart'
import { ItemsContext } from '../../context/ItemsContext'

export function Checkout() {
  const {
    itemsOnCart,
    handleAddItemOnCart,
    handleRemoveItemFromCart,
    handleRemoveAllQuantityOfItem,
    cep,
    setCepValue,
    rua,
    setRuaValue,
    bairro,
    setBairroValue,
    cidade,
    setCidadeValue,
    complemento,
    setComplementoValue,
    numero,
    setNumeroValue,
    uf,
    setUfValue,
    buttonSelected,
    handleButtonSelected,
    handleOrderCompleted,
  } = useContext(ItemsContext)
  const [deliveryTax] = useState<number>(3.5)

  const noItemInCart = itemsOnCart.length === 0

  const pricesArray = itemsOnCart.map((item) => item.price)

  const totalItems = Number(
    pricesArray.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0,
    ),
  )

  const totalItemsAndDeliveryTax = Number(totalItems + deliveryTax).toFixed(2)

  return (
    <CheckoutContainer>
      <InfoHeader>
        <h2>Complete seu pedido</h2>
        <InfoContainer>
          <header>
            <MapPinLine size={22} />
            <h1>Endereço de Entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </header>
          <section>
            <Input
              placeholder="CEP"
              type="number"
              value={cep}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCepValue(e.target.value)
              }
            />
            <Input
              placeholder="Rua"
              value={rua}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRuaValue(e.target.value)
              }
            />
            <Input
              placeholder="Número"
              type="number"
              value={numero}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumeroValue(e.target.value)
              }
            />
            <Input
              placeholder="Complemento"
              value={complemento}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setComplementoValue(e.target.value)
              }
            />
            <Input
              placeholder="Bairro"
              value={bairro}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBairroValue(e.target.value)
              }
            />
            <Input
              placeholder="Cidade"
              value={cidade}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCidadeValue(e.target.value)
              }
            />
            <Input
              placeholder="UF"
              value={uf}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUfValue(e.target.value)
              }
            />
          </section>
        </InfoContainer>
      </InfoHeader>

      <PaymentContainer>
        <header>
          <CurrencyDollar size={22} />
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </header>
        <section>
          <PaymentMethod
            selected={buttonSelected === 0}
            onClick={() => handleButtonSelected(0)}
          >
            <CreditCard size={16} />
            <p>Cartão de crédito</p>
          </PaymentMethod>
          <PaymentMethod
            selected={buttonSelected === 1}
            onClick={() => handleButtonSelected(1)}
          >
            <Bank size={16} />
            <p>Cartão de débito</p>
          </PaymentMethod>
          <PaymentMethod
            selected={buttonSelected === 2}
            onClick={() => handleButtonSelected(2)}
          >
            <Money size={16} />
            <p>Dinheiro</p>
          </PaymentMethod>
        </section>
      </PaymentContainer>

      <CartHeader>
        <h2>Cafés selecionados</h2>
        <CartContainer>
          <div>
            {itemsOnCart
              ? Object.values(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  itemsOnCart.reduce<{ [key: string]: any }>(
                    (accumulator, item) => {
                      if (!accumulator[item.id]) {
                        accumulator[item.id] = {
                          ...item,
                          quantity: 1,
                        }
                      } else {
                        accumulator[item.id].quantity += 1
                      }
                      return accumulator
                    },
                    {},
                  ),
                ).map((item) => (
                  <div key={item.id} className="itemOnCart">
                    <ItemOnCart
                      image={item.img}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onAdd={() => handleAddItemOnCart(item, 1)}
                      onRemove={() => handleRemoveItemFromCart(item)}
                      onDelete={() => handleRemoveAllQuantityOfItem(item)}
                    />
                  </div>
                ))
              : ''}
          </div>
          <div className="amountContainer">
            <div className="totalItems">
              <p>Total itens</p>
              <p>R$ {totalItems.toFixed(2)} </p>
            </div>
            <div className="delivery">
              <p>Entrega</p>
              <p>R$ {deliveryTax.toFixed(2)}</p>
            </div>
            <div className="amountFinal">
              <strong>Total</strong>
              <strong>R$ {totalItemsAndDeliveryTax}</strong>
            </div>
          </div>
          <button onClick={handleOrderCompleted} disabled={noItemInCart}>
            Confirmar pedido
          </button>
        </CartContainer>
      </CartHeader>
    </CheckoutContainer>
  )
}
