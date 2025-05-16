import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Infos } from '../../Pages/Home'
import { CartItem } from '../../components/Cart/styles'

type CartItem = Infos['cardapio'][0] & { quantity: number } //esse 0 é pra pegar a estrutura do cardapio que ta dentro de infos assim o cartItem cocnhece a estrutura que vai ser trabalho que é o cardapio id:number,foto:string...

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...action.payload })
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer
