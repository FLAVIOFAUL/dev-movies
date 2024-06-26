import React from 'react'
import api from '../../services/api'
import { Background } from './styles'


function Home(){

   async function getMovies() {

       const data = await api.get('/movie/popular')
      

       console.log(data)
  }
  getMovies()

         return (
      <div>
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} >
        <h1>Home</h1>
        <p>Essa é a Home</p>
        </Background>
      </div>



         )
}
export default Home