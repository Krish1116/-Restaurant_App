import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCart/>
      </header>
      <div className={classes.mainimage}>
        <div className={classes.gradient}></div>
      </div>
    </Fragment>
  );
};

export default Header;
