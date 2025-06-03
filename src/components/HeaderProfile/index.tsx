import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useGetCardapioQuery } from '../../services/api'
import {
  Container,
  Logo,
  Aba,
  HEADERProfile,
  Container2,
  AbaRestaurante
} from './styles'

import logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import { open } from '../../store/reducers/cart'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderProfile = () => {
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { data: cardapio } = useGetCardapioQuery(id!)

  if (cardapio) {
    return (
      <>
        <HEADERProfile style={{ backgroundImage: `url(${Fundo})` }}>
          <Container>
            <AbaRestaurante to="/">Restaurantes</AbaRestaurante>
            <Logo src={logo} alt="efood logo" />
            <Aba onClick={openCart}>{items.length} produto(s) no carrinho</Aba>
          </Container>
          <p>ID do restaurante: {id}</p>
        </HEADERProfile>

        <Container2>
          <div style={{ backgroundImage: `url(${cardapio.capa})` }} />
          <h2>{cardapio.tipo}</h2>
          <h1>{cardapio.titulo}</h1>
        </Container2>
      </>
    )
  }
  return <h4>Carregando.....</h4>
}

export default HeaderProfile
