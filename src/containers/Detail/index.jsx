import { Container } from './style'
import React from 'react'
import { useEffect } from 'react' 
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData';
import {useParams} from 'react-router-dom'

function Detail() {
 const { id } = useParams()
   const [movie, setMovie] = useState()
   const [movieVideos, setMovieVideos] = useState()
   const [movieCredits, setMovieCredits] = useState()
   const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        
      ])
        .then(([movie, Videos, Credits, Similar ]) => {
          setMovie(movie);
          setMovieVideos(Videos);
          setMovieCredits(Credits);
          setMovieSimilar(Similar);
          
        })
        .catch((error) => console.error(error));
    }
       getAllData()
  },[])

      return (

    <Container>

      <div>Detalhe</div>


    </Container>


      )

}

export default Detail