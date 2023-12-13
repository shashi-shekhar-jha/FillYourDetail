
import React, { useContext } from 'react';
import Modal from './UI/Modal';
import ModalContext from '../Store/ModalContext';
import classes from './ModalA.module.css';

export default function ModalA({formData,handleInputChange,handleSubmit}){
  const modalNameCtx=useContext(ModalContext);

  function handleCloseModalA(){
    modalNameCtx.hideModalA();
  }
 
  return (
    <Modal 
      open={modalNameCtx.progress==='modalA'}
      onClose={modalNameCtx.progress==='modalA'? handleCloseModalA:null}
      className={classes.modal}
    >
    <form onSubmit={handleSubmit}>
    <label for="name">Name:</label>
    <input onChange={handleInputChange} type="text" id="name" name="name" value={formData.name} required></input>

    <label for="email">Email:</label>
    <input onChange={handleInputChange} type="email" id="email" name="email" value={formData.email} required></input>  
    <button  type="submit">Submit</button>
    <button onClick={handleCloseModalA}>Close</button>
     </form>
     
    </Modal>
  )
}
