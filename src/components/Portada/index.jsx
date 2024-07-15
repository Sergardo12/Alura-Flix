import React from 'react'
import styles from "./Portada.module.css"

const Portada = () => {
  return (<>
         <div className={styles.portada}>  
            <div className={styles.container}>
              <h1 className={styles.title}> Bienvenidos a AluraFlix</h1>
            </div>
        </div>   
  </>
   
  )
}

export default Portada