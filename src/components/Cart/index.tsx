import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Produto,
  Sidebar,
  Total,
  EmptyText
} from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Checkout from '../../Pages/Checkout'
import { parseToBrl } from '../../utils'

type Props = {
  infos?: Infos
}

export const Cart = ({ infos }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [view, setView] = useState<'cart' | 'checkout'>('cart')

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          view === 'cart' ? (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <Produto src={item.foto} />
                    <div>
                      <h2>{item.nome}</h2>
                      <p>R$ {item.preco}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} />
                  </CartItem>
                ))}
              </ul>
              <Total>
                Valor Total <span>R$ {parseToBrl(getTotalPrice())}</span>
              </Total>
              <Button onClick={() => setView('checkout')}>
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <Checkout onVoltar={() => setView('cart')} />
          )
        ) : (
          <EmptyText>
            O carrinho está vazio, adicione pelo menos um produto pra continuar
            com a compra
          </EmptyText>
        )}
      </Sidebar>
    </CartContainer>
  )
}
