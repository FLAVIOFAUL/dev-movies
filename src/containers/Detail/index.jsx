import { Container, Background, Cover,Info,SpanGenres,Credits } from './style'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData';
import { useParams} from 'react-router-dom';
import { getImages } from '../../utils/getImages';


function Detail() {
    const {id} = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(),
        getMovieVideos(),
        getMovieCredits(),
        getMovieSimilar(),
        
      ])
        .then(([movie,videos, credits, similar ]) => {
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);
      return (
<>
    {movie && (
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
    )}
</>
      )

}

export default Detail  