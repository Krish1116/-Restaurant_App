import React, { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
  //I also get some error msg is the entered amount is invalid that's why we can use useState
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    //the plus sign is convert the string into number
    const enteredAmountNumber = +enteredAmount

    // check if amount is not entered or less then 1 amount or greater amount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* here is useRef is not work because we can wrap our component with the wrapper component which is Input that's why we can also add the ref in input component */}
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "quantity",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  )
}

export default MealItemForm
//useRef - accepts one argument as the initial value and return a reference
