import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext<any>({})
export const useCarts = () => useContext(CartContext)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<any>([])

  const addCart = (newCart: any) => {
    setCarts([
      ...carts,
      {
        ...newCart,
      },
    ])
  }

  const initCart = () => {
    setCarts([])
  }

  return (
    <CartContext.Provider value={{ carts, addCart, initCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
