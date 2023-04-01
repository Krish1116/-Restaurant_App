import React from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {
  const addItemHandler = (item) => {}
  const removeItem = (id) => {}

  //this will be updated value print which we select to go for cart
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItem,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
//The context object itself does not hold any information. It represents which context other components read or provide.
//CartContext.Provider - let you provide the context value to components.
//CartContext.Consumer - is a alternative and rarely used way to read the context value;
