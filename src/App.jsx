import React from 'react';
import Navbar from './components/Navbar';
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';
import { useState,useContext} from 'react';
import ModalContext from './Store/ModalContext';
import Confirmation from './components/Confirmation';
const App = () => {
  const modalNameCtx=useContext(ModalContext);
  const[isSubmitted,setIsSubmitted]=useState(false);
  const[isChecked,setIsChecked]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     setIsSubmitted(true);
    modalNameCtx.hideModalA();
  };
  function handleCloseModalB(){
    setIsChecked(true);
    modalNameCtx.hideModalB();
  }
  return (
    <>
      <Navbar />
      <Confirmation isSubmitted={isSubmitted} isChecked={isChecked}/>
      <ModalA formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <ModalB formData={formData} handleCloseModalB={handleCloseModalB}/>
      {/* <ModalC /> */}
    </>
  );
};

export default App;
