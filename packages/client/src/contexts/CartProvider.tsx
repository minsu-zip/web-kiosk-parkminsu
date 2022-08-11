import React, { createContext, useContext, useState } from 'react'
import { TCart } from 'utils/types'

const CartContext = createContext<any>({})
export const useCarts = () => useContext(CartContext)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<TCart[]>([])

  const addCart = (newCart: TCart) => {
    setCarts([
      ...carts,
      {
        ...newCart,
      },
    ])
  }

  const removeCart = (id: number) => {
    const newCart = carts.filter((cart: TCart) => cart.id !== id)
    setCarts(newCart)
  }

  const initCart = () => {
    setCarts([])
  }

  return (
    <CartContext.Provider value={{ carts, addCart, removeCart, initCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
