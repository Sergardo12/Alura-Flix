import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import Modal from "../Modal";
import { VideoContext } from "../../Contexts/VideoContext/VideoContext";
import CamposFormularios from "../CamposFormulario";


const Card = ({ video }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { deleteVideo } = useContext(VideoContext)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Borrado = async () => {
    try {
      await deleteVideo(video.id); // Usar la función del contexto para borrar el video
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };
     


  return (
    <div className={styles.videosContainer} key={video.id}>
      <img className={styles.imagenCard} src={video.imagen} alt={video.titulo} />
      <div className={styles.videosInfo}>
        <h3>{video.titulo}</h3>
        <div className={styles.buttonsCard}>
          <button className={styles.botonEliminar} onClick={Borrado}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
          <button className={styles.botonActualizar} onClick = {openModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
              <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
            </svg>
          </button>
          <Modal abrirModal={isModalOpen} cerrarModal={closeModal} >
            <CamposFormularios video={video} onSave={() => closeModal()} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;





// import React, { useState } from "react";
// import styles from "./Card.module.css";
// import Modal from "../Modal";

// const Card = ({ video }) => {
//   const [stateModal, setStateModal] = useState(false);

//   const handleToggleModal = () => {
//     setStateModal(prevState => !prevState);
//   };

//   return (
//     <div className={styles.videosContainer} key={video.id}>
//       <img className={styles.imagenCard} src={video.imagen} alt={video.titulo} />
//       <div className={styles.videosInfo}>
//         <h3>{video.titulo}</h3>
//         <div className={styles.buttonsCard}>
//           <button style={styles.botonEliminar}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//               <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//               <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
//             </svg>
//           </button>
//           <button className={styles.botonActualizar} onClick={handleToggleModal}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
//               <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
//               <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
//             </svg>
//           </button>
//           <Modal
//             estado={stateModal}
//             cambiarEstado={setStateModal}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;