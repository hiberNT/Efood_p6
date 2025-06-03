import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Conteudo,
  List,
  Section,
  Description,
  Fechar,
  Image,
  Modal
} from './styles'

import Menu from '../Menu'
import fechar from '../../assets/images/close 1.png'
import { ButtonContainer } from '../Button/styles'
import { open, add } from '../../store/reducers/cart'

export type Props = {
  Cardapios: Infos['cardapio']
}

export const MenuList = ({ Cardapios }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const [itemSelecionado, setItemSelecionado] = useState<Infos['cardapio'][0]>()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const openCart = () => {
    if (itemSelecionado) {
      dispatch(add({ ...itemSelecionado, quantity: 1 })) // Adiciona quantidade
      dispatch(open())
    }
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 100) + '...'
    }
    return descricao
  }

  return (
    <>
      <div className="container">
        <List>
          {Cardapios.map((cardapio) => (
            <Menu
              key={cardapio.id}
              id={cardapio.id}
              nome={cardapio.nome}
              foto={cardapio.foto}
              descricao={getDescricao(cardapio.descricao)}
              onClick={() => {
                setItemSelecionado(cardapio)
                setModalEstaAberto(true)
              }}
            />
          ))}
        </List>
      </div>

      {itemSelecionado && (
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <Conteudo>
            <Image src={itemSelecionado.foto} alt={itemSelecionado.nome} />
            <Fechar
              src={fechar}
              alt="Fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <Section>
              <h1>{itemSelecionado.nome}</h1>
              <Description>
                {itemSelecionado.descricao}
                <br />
                Serve: {itemSelecionado.porcao}
              </Description>
              <ButtonContainer
                onClick={openCart}
                title="clique aqui"
                type="button"
              >
                Adicionar ao carrinho - R$ {itemSelecionado.preco}
              </ButtonContainer>
            </Section>
          </Conteudo>
          <div className="overlay"></div>
        </Modal>
      )}
    </>
  )
}
