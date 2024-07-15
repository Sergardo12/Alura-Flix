import React, { useContext } from "react";
import styles from "./Categorias.module.css";
import Card from "../Card";
import { VideoContext } from "../../Contexts/VideoContext/VideoContext";

const Categorias = ({ nombreCategoria }) => {
  // Obtener videos del contexto
  const { videos } = useContext(VideoContext);

  // Filtrar videos basados en la categoría
  const filtradodeVideos = videos.filter(video => video.categoria === nombreCategoria);

  return (
    <div className={styles.categorias}>
      <h1>{nombreCategoria}</h1>
      <div className={styles.card}>
        {filtradodeVideos.length > 0 ? (
          filtradodeVideos.map((video) => <Card key={video.id} video={video} />)
        ) : (
          <p>No hay videos en esta categoría</p>
        )}
      </div>
    </div>
  );
};

export default Categorias;
















// import React, { useContext, useEffect, useState } from "react";
// import styles from "./Categorias.module.css";
// import Card from "../Card";
// import { VideoContext } from "../../Contexts/VideoContext/VideoContext";

// const Categorias = ({ nombreCategoria }) => {
//   const {videos} =useContext(VideoContext)

//   // const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch("http://localhost:3001/videos");
//             const data = await response.json();
//             const filtradodeVideos = data.filter(video => video.categoria === nombreCategoria);
//             setVideos(filtradodeVideos);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.categorias}>
//       <h1>{nombreCategoria}</h1>
//       <div className={styles.card}>
//         {videos.length > 0 ? (
//           videos.map((video) => <Card key={video.id} video={video} />)
//         ) : (
//           <p>No hay videos en esta categoría</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Categorias;