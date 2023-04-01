import React, { useContext } from "react"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import cartContext from "../../../store/cart-context"

const MealItem = (props) => {
  //one $ is simply to output the character dollar sign
  //and 2nd in combination with the curly braces to inject dynamic content into this template literal. with the help of this it convert number into string and keeping a specific number of decimal. it keeps 2 decimal for Example props.price ='25.6' it will return '25.60'
  const price = `$${props.price.toFixed(2)}`

  const cartCtx = useContext(cartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
