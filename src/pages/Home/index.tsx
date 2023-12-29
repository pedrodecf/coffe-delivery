import { HomeContainer, ItemsContainer } from './styles'

import { Intro } from '../../components/Intro'
import { Item } from '../../components/Item'
import { useContext, useState } from 'react'
import { ItemsContext } from '../../context/ItemsContext'

export function Home() {
  const { handleAddItemOnCart } = useContext(ItemsContext)

  const [data, setData] = useState([
    {
      id: 1,
      tags: ['Tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      quantity: 1,
      img: '/expresso.png',
    },
    {
      id: 2,
      tags: ['Tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      quantity: 1,
      img: '/americano.png',
    },
    {
      id: 3,
      tags: ['Tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      quantity: 1,
      img: '/expresso-cremoso.png',
    },
    {
      id: 4,
      tags: ['Tradicional', 'Gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      quantity: 1,
      img: '/cafe-gelado.png',
    },
    {
      id: 5,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado  ',
      price: 9.9,
      quantity: 1,
      img: '/cafe-com-leite.png',
    },
    {
      id: 6,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      quantity: 1,
      img: '/latte.png',
    },
    {
      id: 7,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      quantity: 1,
      img: '/capuccino.png',
    },
    {
      id: 8,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      quantity: 1,
      img: '/macchiato.png',
    },
    {
      id: 9,
      tags: ['Tradicional', 'Com Leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      quantity: 1,
      img: '/mochacchino.png',
    },
    {
      id: 10,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      quantity: 1,
      img: '/cubano.png',
    },
    {
      id: 11,
      tags: ['Especial', 'Com Leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      quantity: 1,
      img: '/chocolate-quente.png',
    },
    {
      id: 12,
      tags: ['Especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      quantity: 1,
      img: '/havaiano.png',
    },
    {
      id: 13,
      tags: ['Especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      quantity: 1,
      img: '/arabe.png',
    },
    {
      id: 14,
      tags: ['Especial', 'Alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      quantity: 1,
      img: '/public/irlandes.png',
    },
  ])

  function handleIncreaseQuantity(itemId: number) {
    setData(
      data.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      }),
    )
  }

  function handleDecreaseQuantity(itemId: number) {
    setData(
      data.map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
        }
        return item
      }),
    )
  }

  return (
    <HomeContainer>
      <Intro />
      <h2 className="nossosCafes">Nossos cafés</h2>
      <ItemsContainer>
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              img={item.img}
              tags={item.tags}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              addOneItem={() => handleIncreaseQuantity(item.id)}
              removeOneItem={() => handleDecreaseQuantity(item.id)}
              onClick={() => handleAddItemOnCart(item, item.quantity)}
            />
          )
        })}
      </ItemsContainer>
    </HomeContainer>
  )
}
