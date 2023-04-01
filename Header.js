import { Fragment } from "react"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}></div>
        <h1>CHEF FOOD</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* <div className={classes.main_image}>
        <div className={classes.gradient}></div>
      </div> */}
    </Fragment>
  )
}

export default Header
