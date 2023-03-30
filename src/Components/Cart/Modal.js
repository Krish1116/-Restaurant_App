import React, { Fragment } from "react"
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const Backdrop = () => {
  return <div className={classes.backdrop} />
}
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <Fragment>
      {/* if we don't use react portal then we can import like this but we can use here react portal  
      /* <Backdrop />
   <ModalOverlay>{ props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
