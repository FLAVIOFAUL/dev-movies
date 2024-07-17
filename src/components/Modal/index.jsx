import { Container, Background } from "../Header/styles"
import React, { useState } from "react" 
import { useEffect } from "react";
import api from "../../services/api";


function Modal({ movieId }) {
  const [movie,setMovie]= useState()


    useEffect(() => {
        async function getMovies() {
          try {
            const { data } = await api.get(`/movie/${movieId}/videos`);
            setMovie(data.results[0]);
            setTopMovies(data.results); 
            console.log(data);
          } catch (error) {
            console.log(error);
          }
          getMovies()
        
        }, [])


  return(
    <Background>
        {movie &&(
    <Container>
     <iframe
     src={`https://www.youtube.com/embed/${movie.key}`}
     title="Youtube Video player"
     height="500px"
     width="100%"
     ></iframe>
    </Container>
    )}
    </Background>




  )
}

export default Modal;