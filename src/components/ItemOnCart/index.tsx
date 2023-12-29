import {
  ItemOnCartContainer,
  ImgContainer,
  NameAndControllerAndRemoveButtonContainer,
  PriceContainer,
  AmountControllerContainer,
} from './styles'

import { Minus, Plus, Trash } from '@phosphor-icons/react'

interface ItemOnCartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string
  name: string | undefined
  price: number | undefined
  quantity?: number
  onAdd?: React.MouseEventHandler
  onRemove?: React.MouseEventHandler
  onDelete?: React.MouseEventHandler
}

export function ItemOnCart({
  image,
  name,
  price,
  quantity,
  onAdd,
  onRemove,
  onDelete,
}: ItemOnCartProps) {
  return (
    <ItemOnCartContainer>
      <ImgContainer>
        <img src={image} alt="" />
      </ImgContainer>
      <NameAndControllerAndRemoveButtonContainer>
        <p>{name}</p>

        <AmountControllerContainer>
          <button onClick={onRemove}>
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button>
            <Plus size={14} onClick={onAdd} />
          </button>
        </AmountControllerContainer>

        <button onClick={onDelete}>
          <Trash size={16} /> REMOVER
        </button>
      </NameAndControllerAndRemoveButtonContainer>
      <PriceContainer>
        <p>R$ {price?.toFixed(2)}</p>
      </PriceContainer>
    </ItemOnCartContainer>
  )
}
