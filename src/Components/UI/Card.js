import React from "react"
import classes from "./Card.module.css"

//This will be a super simple component. This will just be a wrapper component.which provide some HTML structure and some css code for any content you want.

const Card = (props) => {
  return <div className={classes.Card}>{props.children}</div>
}

export default Card

//The main advantage of creating this component is that it is reusable that it can be easily used multiple times for achieve consistent styling and layout. It also helps to keep the code organized and maintainable by encapsulating complex functionality or styling within a single component.
