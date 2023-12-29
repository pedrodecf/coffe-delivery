import {
  ItemContainer,
  TagsContainer,
  Tag,
  ItemName,
  ItemDescription,
  PriceAndControllerContainer,
  ItemPrice,
  ButtonBuy,
  AmountControllerContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

interface ItemProps {
  name: string
  description: string
  price: number
  tags: string[]
  img?: string
  quantity: number
  onClick: () => void
  addOneItem: () => void
  removeOneItem: () => void
}

export function Item({
  name,
  description,
  price,
  tags,
  img,
  onClick,
  quantity,
  addOneItem,
  removeOneItem,
}: ItemProps) {
  return (
    <ItemContainer>
      <img src={img} alt="" />
      <TagsContainer>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </TagsContainer>
      <ItemName>{name}</ItemName>
      <ItemDescription>{description}</ItemDescription>
      <PriceAndControllerContainer>
        <ItemPrice>
          <span>R$ </span>
          {price.toFixed(2)}
        </ItemPrice>

        <AmountControllerContainer>
          <button onClick={removeOneItem}>
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button onClick={addOneItem}>
            <Plus size={14} />
          </button>
        </AmountControllerContainer>

        <ButtonBuy onClick={onClick}>
          <ShoppingCart size={22} weight="fill" />
        </ButtonBuy>
      </PriceAndControllerContainer>
    </ItemContainer>
  )
}
