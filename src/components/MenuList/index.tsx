import { useState } from 'react'
import Menu from '../Menu'
import {
  Conteudo,
  List,
  Section,
  Description,
  Fechar,
  Image,
  Modal
} from './styles'
import fechar from '../../assets/images/close 1.png'
import { infos } from '../../Pages/Home'
import { ButtonContainer } from '../Button/styles'

export type Props = {
  Cardapios: infos['cardapio']
}

export const MenuList = ({ Cardapios }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 100) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<infos['cardapio'][0]>()

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
              <ButtonContainer title="clique aqui" type="button">
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

export default MenuList
