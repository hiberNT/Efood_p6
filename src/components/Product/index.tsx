import { Link } from 'react-router-dom'
import star from '../../assets/images/estrela.png'
import Button from '../Button'
import Tag from '../Tag'
import { TagContainer } from '../Tag/style'
import {
  Card,
  TituloContainer,
  Descricao,
  Infos,
  Restaurante,
  Nota
} from './styles'

export type Props = {
  titulo: string
  avaliacao: number
  tipo: string
  destacado: boolean
  descricao: string
  capa: string
  id: number
}

const Product = ({
  titulo,
  avaliacao,
  tipo,
  destacado,
  descricao,
  capa,
  id
}: Props) => (
  <Card>
    <img src={capa} />
    <Infos>
      {destacado && <TagContainer>Destaque da semana</TagContainer>}
      <Tag>{tipo}</Tag>
    </Infos>
    <Restaurante>
      <TituloContainer>
        {titulo}
        <Nota>
          <h4>{avaliacao}</h4>
          <img src={star} />
        </Nota>
      </TituloContainer>
      <Descricao>{descricao}</Descricao>
      <Link to={`/profile/${id}`}>
        <Button type="button" title="Mais infos">
          Saiba mais
        </Button>
      </Link>
    </Restaurante>
  </Card>
)

export default Product
