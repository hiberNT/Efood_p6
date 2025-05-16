import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Produto,
  Sidebar,
  Total
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { Infos } from '../../Pages/Home'

type Props = {
  Infos?: Infos
}

export const Cart = ({ Infos }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
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
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}
