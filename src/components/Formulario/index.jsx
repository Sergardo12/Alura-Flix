import React from 'react'
import styles from "./Formulario.module.css"
import CamposFormularios from '../CamposFormulario';

const Formulario = () => {
  return (
   <div className={styles.container}>
    <div className={styles.info}>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
    </div>
    <CamposFormularios />
   </div>
  )
}

export default Formulario;
