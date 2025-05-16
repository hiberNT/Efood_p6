import Button from '../Button'
import { Card, Titulo, Container } from './styles'

type Props = {
  onClick?: () => void
  foto: string
  preco?: number
  id?: number
  nome: string
  porcao?: string
  descricao: string
}

const Menu = ({ onClick, foto, nome, descricao }: Props) => (
  <Card>
    <Container>
      <img src={foto} alt="" />
      <Titulo>{nome}</Titulo>
      <p>{descricao}</p>
      <Button onClick={onClick} type="button" title="Adiconar">
        Mais Detalhes
      </Button>
    </Container>
  </Card>
)

export default Menu
