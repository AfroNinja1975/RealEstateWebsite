import React, {Fragment} from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalCloseContainer}>
        <div className={classes.modalClose} onClick={props.closeModal}></div>
      </div>
      <div className={classes.content}>{props.content}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop closeModal={props.onHideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          content={props.children}
          closeModal={props.onHideModal}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;