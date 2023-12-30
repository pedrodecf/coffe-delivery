import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ItemsOnCartProps {
  id: number
  tags?: string[]
  name?: string
  description?: string
  price?: number
  quantity: number
}

interface ItemsContextProps {
  itemsOnCart: ItemsOnCartProps[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItemsOnCart: any
  cep: string
  orderCep: string
  rua: string
  orderRua: string
  numero: string
  orderNumero: string
  complemento: string
  orderComplemento: string
  bairro: string
  orderBairro: string
  cidade: string
  orderCidade: string
  uf: string
  orderUf: string
  buttonSelected: number | null
  orderPaymentMethod: string | null
  handleAddItemOnCart: (newitem: ItemsOnCartProps, quantity: number) => void
  handleRemoveItemFromCart: (item: ItemsOnCartProps) => void
  handleRemoveAllQuantityOfItem: (item: ItemsOnCartProps) => void
  setCepValue: (newValue: string) => void
  setRuaValue: (newValue: string) => void
  setNumeroValue: (newValue: string) => void
  setComplementoValue: (newValue: string) => void
  setBairroValue: (newValue: string) => void
  setCidadeValue: (newValue: string) => void
  setUfValue: (newValue: string) => void
  handleButtonSelected: (btnIndex: number) => void
  handleOrderCompleted: () => void
}

export const ItemsContext = createContext({} as ItemsContextProps)

interface ItemsContextProviderProps {
  children: ReactNode
}

export function ItemsContextProvider({ children }: ItemsContextProviderProps) {
  const storedItem = localStorage.getItem('@coffe-delivery')
  const initialItemsOnCart = storedItem ? JSON.parse(storedItem) : []
  const [itemsOnCart, setItemsOnCart] =
    useState<ItemsOnCartProps[]>(initialItemsOnCart)
  const [cep, setCep] = useState('')
  const [orderCep, setOrderCep] = useState('')
  const [rua, setRua] = useState('')
  const [orderRua, setOrderRua] = useState('')
  const [numero, setNumero] = useState('')
  const [orderNumero, setOrderNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [orderComplemento, setOrderComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [orderBairro, setOrderBairro] = useState('')
  const [cidade, seCidade] = useState('')
  const [orderCidade, setOrderCidade] = useState('')
  const [uf, seUf] = useState('')
  const [orderUf, setOrderUf] = useState('')
  const [buttonSelected, setButtonSelected] = useState<number | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [orderPaymentMethod, setOrderPaymentMethod] = useState<string | null>(
    '',
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof buttonSelected === 'number') {
      switch (buttonSelected) {
        case 0:
          setPaymentMethod('Cartão de Crédito')
          break
        case 1:
          setPaymentMethod('Cartão de Débito')
          break
        case 2:
          setPaymentMethod('Dinheiro')
          break
        default:
          setPaymentMethod('Não informado')
          break
      }
    }
  }, [buttonSelected])

  function handleButtonSelected(btnIndex: number) {
    setButtonSelected(btnIndex)
  }

  function setCepValue(newValue: string) {
    setCep(newValue)
  }

  function setRuaValue(newValue: string) {
    setRua(newValue)
  }

  function setNumeroValue(newValue: string) {
    setNumero(newValue)
  }

  function setComplementoValue(newValue: string) {
    setComplemento(newValue)
  }

  function setBairroValue(newValue: string) {
    setBairro(newValue)
  }

  function setCidadeValue(newValue: string) {
    seCidade(newValue)
  }

  function setUfValue(newValue: string) {
    seUf(newValue)
  }

  function handleAddItemOnCart(newitem: ItemsOnCartProps, quantity: number) {
    for (let index = 0; index < quantity; index++) {
      setItemsOnCart((prevState) => [...prevState, newitem])
    }
  }

  function handleRemoveItemFromCart(item: ItemsOnCartProps) {
    const itemIndex = itemsOnCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    if (itemIndex !== -1) {
      const updatedItems = [...itemsOnCart]

      if (updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity -= 1
      } else {
        updatedItems.splice(itemIndex, 1)
      }

      setItemsOnCart(updatedItems)
    }
  }

  useEffect(() => {
    localStorage.setItem('@coffe-delivery', JSON.stringify(itemsOnCart))
  }, [itemsOnCart])

  function handleOrderCompleted() {
    if (!cep || !rua || !numero || !complemento || !bairro || !cidade || !uf) {
      return alert('Não deixe nenhum campo em branco.')
    }

    if (cep.length !== 8) {
      return alert('Insira um CEP válido.')
    }

    if (typeof buttonSelected === 'number') {
      navigate('/success')
      setItemsOnCart([])
      setOrderPaymentMethod(paymentMethod)
      setPaymentMethod(null)
      setButtonSelected(null)
      setOrderCep(cep)
      setCep('')
      setOrderRua(rua)
      setRua('')
      setOrderNumero(numero)
      setNumero('')
      setOrderComplemento(complemento)
      setComplemento('')
      setOrderBairro(bairro)
      setBairro('')
      setOrderCidade(cidade)
      seCidade('')
      setOrderUf(uf)
      seUf('')
    } else {
      alert('Escolha a forma de pagamento!')
    }
  }

  function handleRemoveAllQuantityOfItem(item: ItemsOnCartProps) {
    const myItem = itemsOnCart.find((cartItem) => cartItem.id === item.id)

    const updatedItems = itemsOnCart.filter((cartItem) => cartItem !== myItem)

    setItemsOnCart(updatedItems)
  }

  return (
    <ItemsContext.Provider
      value={{
        itemsOnCart,
        handleAddItemOnCart,
        setItemsOnCart,
        handleRemoveItemFromCart,
        handleRemoveAllQuantityOfItem,
        bairro,
        setBairroValue,
        cep,
        setCepValue,
        cidade,
        setCidadeValue,
        complemento,
        setComplementoValue,
        numero,
        setNumeroValue,
        rua,
        setRuaValue,
        uf,
        setUfValue,
        buttonSelected,
        handleButtonSelected,
        orderPaymentMethod,
        handleOrderCompleted,
        orderCep,
        orderCidade,
        orderComplemento,
        orderBairro,
        orderNumero,
        orderRua,
        orderUf,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
