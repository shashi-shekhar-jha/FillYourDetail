import React, { useContext } from 'react';
import ModalContext from '../Store/ModalContext';
import classes from './Navbar.module.css';
const Navbar = () => {
   const  modalNameCtx=useContext(ModalContext);
   function handleShowModalA(){
       modalNameCtx.showModalA();
   }
   function handleShowModalB(){
    modalNameCtx.showModalB();
   }
   function handleShowModalC(){
    modalNameCtx.showModalC();
   }

  return (
    <nav className={classes.nav}>
      <button onClick={handleShowModalA} >Fill Detail</button>
      <button onClick={handleShowModalB} >Check Detail</button>
      <button onClick={handleShowModalC} >Open Modal C</button>
    </nav>
  );
};

export default Navbar;
