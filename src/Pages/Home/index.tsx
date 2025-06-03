import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Rodape from '../../components/Footer'
import { useGetRestauranteQuery } from '../../services/api'
import Loader from '../../Loader'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestauranteQuery()

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <ProductList rest={restaurantes || []} />}
      <Rodape />
    </>
  )
}

export default Home
