import { useParams } from 'react-router-dom'
import HeaderProfile from '../../components/HeaderProfile'
import Rodape from '../../components/Footer'
import { Cart } from '../../components/Cart'
import { MenuList } from '../../components/MenuList'
import { useGetCardapioQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetCardapioQuery(id!)

  return (
    <>
      <HeaderProfile />
      {cardapio && <MenuList Cardapios={cardapio.cardapio} />}
      <Rodape />
      <Cart />
    </>
  )
}
export default Profile
