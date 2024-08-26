import { Container, Background, Cover } from './style'
import React from 'react'
import { useEffect } from 'react' 
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData';
import {useParams} from 'react-router-dom'
import { getImages } from '../../utils/getImages';
import { Info } from '../Home/styles';
import SpanGenres from '../../../dev-movies/src/components/SpanGenres';
import Credits from '../../components/Credits';

function Detail() {
 const { id } = useParams()
   const [movie, setMovies] = useState()
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
          setMovies(movie);
          setMovieVideos(Videos);
          setMovieCredits(Credits);
          setMovieSimilar(Similar);
          
        })
        .catch((error) => console.error(error));
    }
       getAllData()
  },[])

      return (
<>

    <Background image={getImages(movie.backdrop_path)} />
    <Container>

      <div>Detalhe</div>
     <Cover>
          <img src={getImages(movie.poster_path)} />

     </Cover>
        <Info>
          <h2>{movie.title}</h2>
          <SpanGenres genres={movie.genres}/>
          <p>{movie.overview}</p>
          <div>
            <Credits credits={movieCredits}/>  
            </div>
        </Info>
    </Container>

</>
      )

}

export default Detail