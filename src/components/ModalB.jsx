// ModalA.js
import React, { useContext } from 'react';
import Modal from './UI/Modal';
import ModalContext from '../Store/ModalContext';
import classes from './ModalB.module.css';

export default function ModalB({formData,handleCloseModalB}){
  const modalNameCtx=useContext(ModalContext);

  
  return (
    <Modal 
      open={modalNameCtx.progress==='modalB'}
      onClose={modalNameCtx.progress==='modalB'? handleCloseModalB:null}
      className={classes.modal}
    >
      <div>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      </div>
      <button onClick={handleCloseModalB}>Close</button>
    </Modal>
  )
}
