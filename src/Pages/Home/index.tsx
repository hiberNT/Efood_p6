import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import { useEffect, useState } from 'react'

export type infos = {
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
  const [restaurantes, setRestaurantes] = useState<infos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Header />
      <ProductList rest={restaurantes} />
      <Rodape />
    </>
  )
}

export default Home
