import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Rodape from '../../components/Footer'
import { useGetRestauranteQuery } from '../../services/api'

export type Infos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestauranteQuery()
  if (restaurantes) {
    return (
      <>
        <Header />
        <ProductList rest={restaurantes} />
        <Rodape />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
