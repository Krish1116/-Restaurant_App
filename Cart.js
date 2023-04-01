import React from "react"
import classes from "./Cart.module.css"
import Modal from "./Modal"

const Cart = (props) => {
  const cart_items = (
    //we can write classes["cart-items"] like this because of this dash
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
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          {/* we can onClick={props.onCloseCart} also use in modal component */}
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart

//Wrapper component - that surround unknown components and provide a default structure to display the child components. A wrapper component may be used to create user interface (UI) components that are used frequently throughout a design, such as modals, template pages, and information tiles.
