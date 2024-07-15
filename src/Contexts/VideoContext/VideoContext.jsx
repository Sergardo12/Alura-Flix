import React, { createContext, useState } from "react";


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);


      // Función para cargar videos desde la API
  const getVideo = async () => {
    try {
      const response = await fetch("http://localhost:3001/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  

    // Función para agregar un video
    const postVideo = async (video) => {
        try {
          const response = await fetch("http://localhost:3001/videos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(video),
          });
          const newVideo = await response.json();
          setVideos([...videos, newVideo]);
        } catch (error) {
          console.error("Error adding video:", error);
        }
      };

      // Función para eliminar un video

        const deleteVideo = async (id) => {
             try {
                await fetch(`http://localhost:3001/videos/${id}`, {
                    method: "DELETE",
                });
                    setVideos(videos.filter(video => video.id !== id));
            } catch (error) {
            console.error("Error deleting video:", error);
        }
    };


        // Función para actualizar un video
        const putVideo = async (id, updatedVideo) => {
          try {
            const response = await fetch(`http://localhost:3001/videos/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedVideo),
            });
            const data = await response.json();
            const updatedVideos = videos.map(video => video.id === id ? data : video);
            console.log("Updated videos:", updatedVideos); // Verifica el estado actualizado
            setVideos(updatedVideos);
          } catch (error) {
            console.error("Error updating video:", error);
          }
        };
  
    // Proveer el estado y las funciones a los componentes hijos
    return (
      <VideoContext.Provider value={{ videos, postVideo, deleteVideo, putVideo, getVideo}}>
        {children}
      </VideoContext.Provider>
    );
  };
