import React, { useContext, useEffect, useState } from 'react';
import styles from "./CamposFormulario.module.css";
import { VideoContext } from '../../Contexts/VideoContext/VideoContext';

const CamposFormularios = ({ video = null }) => {
  const { postVideo, putVideo } = useContext(VideoContext);

  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    link: '',
    sinopsis: ''
  });

  // Efecto para cargar los datos del video si está editando
  useEffect(() => {
    if (video) {
      setFormData({
        titulo: video.titulo || '',
        categoria: video.categoria || '',
        imagen: video.imagen || '',
        link: video.link || '',
        sinopsis: video.sinopsis || ''
      });
    }
  }, [video]);

  const manejarCambiar = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`); // Debugging
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Debugging

    // Verifica si todos los campos están completos
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    try {
      if (video) {
        // Actualizar el video
        await putVideo(video.id, formData);
      } else {
        // Crear un nuevo video
        await postVideo(formData);
      }

      alert(video ? 'Tarjeta actualizada con éxito' : 'Tarjeta creada con éxito');
      
      // Limpiar el formulario
      setFormData({
        titulo: '',
        categoria: '',
        imagen: '',
        link: '',
        sinopsis: ''
      });
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={manejarEnvio}>
      <h2>{video ? 'Actualizar Tarjeta' : 'Crear Tarjeta'}</h2>
      <div className={styles.divForm}>
        <div className={styles.divCampoForm}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            id="titulo"
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={manejarCambiar}
            required
          />
        </div>
        <div className={styles.divCampoForm}>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={manejarCambiar}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="Animacion">Animacion</option>
            <option value="Accion">Accion</option>
            <option value="Comedia">Comedia</option>
          </select>
        </div>
        <div className={styles.divCampoForm}>
          <label htmlFor="imagen">Imagen:</label>
          <input
            id="imagen"
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={manejarCambiar}
            required
          />
        </div>
        <div className={styles.divCampoForm}>
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            type="text"
            name="link"
            value={formData.link}
            onChange={manejarCambiar}
            required
          />
        </div>
        <div className={styles.divCampoForm}>
          <label htmlFor="sinopsis">Sinopsis:</label>
          <textarea
            id="sinopsis"
            name="sinopsis"
            value={formData.sinopsis}
            onChange={manejarCambiar}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.botonFormulario} type="submit">Guardar</button>
        </div>
      </div>
    </form>
  );
};

export default CamposFormularios;































// import React from 'react';
// import styles from "./CamposFormulario.module.css";

// const CamposFormularios = () => {
//   return (
//     <form className={styles.form}>
//       <h2>Crear Tarjeta</h2>
//       <div className={styles.divForm}>
//         <div className={styles.divCampoForm}>
//           <label htmlFor="titulo">Titulo:</label>
//           <input id="titulo" type="text" name="titulo"/>
//         </div>
//         <div className={styles.divCampoForm}>
//           <label htmlFor="categoria">Categoria:</label>
//           <select id="categoria" name="categoria">
//             <option value="Animacion">Animacion</option>
//             <option value="Accion">Accion</option>
//             <option value="Comedia">Comedia</option>
//           </select>
//         </div>
//         <div className={styles.divCampoForm}>
//           <label htmlFor="imagen">Imagen:</label>
//           <input id="imagen" type="text" name="imagen"/>
//         </div>
//         <div className={styles.divCampoForm}>
//           <label htmlFor="link">Link:</label>
//           <input id="link" type="text" name="link"/>
//         </div>
//         <div className={styles.divCampoForm}>
//           <label htmlFor="sinopsis">Sinopsis:</label>
//           <textarea id="sinopsis" name="sinopsis"></textarea>
//         </div>
//         <div className={styles.buttonContainer}>
//           <button className={styles.botonFormulario} type="submit">Enviar</button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default CamposFormularios;
