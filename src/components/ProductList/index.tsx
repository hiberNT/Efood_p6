import { infos } from '../../Pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  rest: infos[]
}

const ProductList = ({ rest }: Props) => (
  <div className="container">
    <Container>
      <List>
        {rest.map((restaurant) => (
          <Product
            id={restaurant.id}
            key={restaurant.id}
            titulo={restaurant.titulo}
            avaliacao={restaurant.avaliacao}
            tipo={restaurant.tipo}
            destacado={restaurant.destacado}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductList
