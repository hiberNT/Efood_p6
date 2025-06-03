import { useParams } from 'react-router-dom'

import HeaderProfile from '../../components/HeaderProfile'
import Rodape from '../../components/Footer'
import { Cart } from '../../components/Cart'
import { MenuList } from '../../components/MenuList'
import { useGetCardapioQuery } from '../../services/api'
import Loader from '../../Loader'

const Profile = () => {
  const { id } = useParams()

  const { data: cardapio, isLoading } = useGetCardapioQuery(id!)

  return (
    <>
      <HeaderProfile />
      {isLoading ? (
        <Loader />
      ) : (
        cardapio && <MenuList Cardapios={cardapio.cardapio} />
      )}
      <Rodape />
      <Cart />
    </>
  )
}
export default Profile
