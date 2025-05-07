import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderProfile from '../../components/HeaderProfile'
import MenuList from '../../components/MenuList'
import Rodape from '../../components/Rodape'
import { infos } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<infos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  return (
    <>
      <HeaderProfile />
      {cardapio && <MenuList Cardapios={cardapio.cardapio} />}
      <Rodape />
    </>
  )
}
export default Profile
