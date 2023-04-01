import React, { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItem = state.items.concat(action.item)
    const updatedTotalAmount =
      state.totalAmount + action.item.price + action.item.amount
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item })
  }
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id })
  }

  //this will be updated value print which we select to go for cart
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
