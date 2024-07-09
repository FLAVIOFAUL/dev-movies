import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons } from './styles' 

import Button from '../../components/Button'
import Slider from '../../components/Slider'

function Home() {
  const [movie, setMovie] = useState([])
  const [topMovies, setMovies] = useState()

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

    async function getTopMovies() {
      try {
        const { data } = await api.get('/movie/top_rated')
        setMovies(data.results)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getMovies()
    getTopMovies()
  }, [])

  return (
    <>

      {movie && (
      <Background
        img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

        <Container>
        <Info>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <ContainerButtons>

          <Button red >Assista Agora</Button>
          <Button >Assista o Trailer</Button>
        </ContainerButtons>
        </Info>
        <Poster>
        <img alt="capa-do-filme" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        </Poster>
        </Container>
      </Background>
      )}
     {topMovies && <Slider info={topMovies} title={'Top Filmes'} /> }
    </>
  )
}
export default Home