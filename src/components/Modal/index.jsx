import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

const Modal = ({ abrirModal, cerrarModal, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (abrirModal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [abrirModal]);

  return (
    <dialog ref={modalRef} className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeButton} onClick={cerrarModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
