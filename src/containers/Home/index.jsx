import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Background,Info, Poster,Container, ContainerButtons } from './styles'
import Movies from '../Movies'
import Button from '../../components/Header/Button/styles'

function Home() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await api.get('/movie/popular')
        setMovie(data.results[0])
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getMovies()
  }, [])

  return (
    <div>

      {movie && (
      <Background
        img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      >
        <Container>
        <Info>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <ContainerButtons>
          
          <Button >Assista Agora</Button>
          <Button >Assista o Trailer</Button>
        </ContainerButtons>
        </Info>
        <Poster>
        <img alt="capa-do-filme" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        </Poster>
        </Container>
      </Background>
      )}
    </div>
  );
}
export default Home