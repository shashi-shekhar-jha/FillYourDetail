// ModalA.js
import React, { useContext } from 'react';
import Modal from './UI/Modal';
import ModalContext from '../Store/ModalContext';
import classes from './ModalC.module.css';

export default function ModalC(){
  const modalNameCtx=useContext(ModalContext);

  function handleCloseModalC(){
    modalNameCtx.hideModalC();
  }
  return (
    <Modal 
      open={modalNameCtx.progress==='modalC'}
      onClose={modalNameCtx.progress==='modalC'? handleCloseModalC:null}
      className={classes.modal}
    >
      <p>modal Content</p>
      <button onClick={handleCloseModalC}>Close</button>
    </Modal>
  )
}
