import React, { useState, useEffect } from 'react'
import { getImages } from '../../utils/getImages';

import { Background, Info, Poster, Container, ContainerButtons } from './styles';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { useNavigate } from 'react-router-dom';
import { getMovie, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData';


function Home() {
  const [showModal, setShowModal]=useState(false);
  const [movie, setMovie] = useState([]);
  const [topMovies, setTopMovies] = useState(); 
  const [topSeries, setTopSeries] = useState();
  const [topPeople ,setTopPeople]= useEffect();
  const [popularSeries, setPopularSeries]= useEffect();
  const navigate = useNavigate()


  useEffect(() => {
    async function getAllData() {

      setMovie(await getMovie())
      setTopMovies(await getTopMovies())
      setTopSeries(await getTopSeries)
      setPopularSeries(await getPopularSeries)
      setTopPeople(await getTopPeople)
      
    }

   

    getAllData();
   
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieid={movie.id}/>}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
    </>
  );
}

export default Home;