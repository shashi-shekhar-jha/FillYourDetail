import { createContext, useState } from 'react';

const ModalContext = createContext({
  progress: '', // 'modalA', 'modalB','modalC'
  showModalA: () => {},
  hideModalA: () => {},
  showModalB: () => {},
  hideModalB: () => {},
  showModalC: () => {},
  hideModalC: () => {},
  
});

export function ModalContextProvider({ children }) {
  const [modalName, setModalName] = useState('');

  function showModalA() {
    setModalName('modalA');
  }

  function hideModalA() {
    setModalName('');
  }

  function showModalB() {
    setModalName('modalB');
  }

  function hideModalB() {
    setModalName('');
  }
  function showModalC() {
    setModalName('modalC');
  }

  function hideModalC() {
    setModalName('');
  }

  const modalNameCtx = {
    progress: modalName,
    showModalA,
    hideModalA,
    showModalB,
    hideModalB,
    showModalC,
    hideModalC
  };

  return (
    <ModalContext.Provider value={modalNameCtx}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;