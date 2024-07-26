import api from "./api"

export async function getMovies(){
  const {
    data: { results}
  } = await.get('/movie/popular')

    return results[0]
}

export async function gettopMovies(){
    const {
      data: { results}
    } = await.get('/movie/top_rated')
  
      return results 
  }

  export async function getTopSeries(){
    const {
      data: { results}
    } = await.get('/tv/top_rated')
  
      return results 
  }

  export async function getPopularSeries(){
    const {
      data: { results}
    } = await.get('/tv/popular')
  
      return results 
  }

  export async function getTopPeople(){
    const {
      data: { results}
    } = await.get('/person/popular')
  
      return results 
  }

  export async function getMovie(movieId) {

     const {
        data: { results}
     } = await api.get(`/movies/${movieId}/videos`);


       return results

  }