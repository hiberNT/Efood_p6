import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Produto,
  Sidebar,
  Total
} from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { Infos } from '../../Pages/Home'
import Checkout from '../../Pages/Checkout'

type Props = {
  Infos?: Infos
}

export const Cart = ({ Infos }: Props) => {
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
        {view === 'cart' ? (
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
              Valor Total <span>R$ {getTotalPrice()}</span>
            </Total>
            <Button onClick={() => setView('checkout')}>
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <Checkout onVoltar={() => setView('cart')} />
        )}
      </Sidebar>
    </CartContainer>
  )
}
