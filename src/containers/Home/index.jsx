import React, { useState, useEffect } from 'react'
import { getImages } from '../../utils/getImages';
import api from '../../services/api';
import { Background, Info, Poster, Container, ContainerButtons } from './styles';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [showModal, setShowModal]=useState(false);
  const [movie, setMovie] = useState([]);
  const [topMovies, setTopMovies] = useState(); 
  const [topSeries, setTopSeries] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await api.get('/movie/popular');
        setMovie(data.results[0]);
        setTopMovies(data.results); 
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    async function getTopSeries() {
      try {
        const { data } = await api.get('/tv/top_rated');
        setTopSeries(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
    getTopSeries();
  }, []);

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