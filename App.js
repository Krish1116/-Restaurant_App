import Header from "./Components/Layout.js/Header"
import { Fragment, useState } from "react"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"

function App() {
  //we need see the cart while I click the cart which is present in header that's why we need 2 state 1 state for showing the total and another was for closing
  //why we choose this file because we can render the cart component is here that's why we can add here instead of this the another way is to create another parent component for that
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}

      {/* onShowCart={showCartHandler} why we can write like this because we don't need to execute the function here we just need to point at it, so that it can be executed from inside the header component */}
      {/* onShowCart={showCartHandler()} if write like this that means it's execute here */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
