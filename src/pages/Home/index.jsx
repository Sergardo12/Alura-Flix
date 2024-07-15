import React, { useContext, useEffect } from 'react'
import Portada from '../../components/Portada'
import Categorias from '../../components/Categorias'
import Modal from '../../components/Modal'
import { VideoContext } from '../../Contexts/VideoContext/VideoContext'

const Home = () => {

  const {getVideo} = useContext(VideoContext);

  useEffect(()=>{
    getVideo();
  }, [getVideo])
  return (
  
    <div>
       
        <Portada/>
        <Categorias nombreCategoria="Animacion"/>
        <Categorias nombreCategoria="Accion"/>
        <Categorias nombreCategoria="Comedia"/>
        
    </div>
    
  )
}

export default Home