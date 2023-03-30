import React from "react"
import classes from "./Cart.module.css"
import Modal from "./Modal"

const Cart = (props) => {
  const cart_items = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Loaded Fries", price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
  return (
    <Modal>
      {cart_items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
