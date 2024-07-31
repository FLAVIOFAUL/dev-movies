import React, { useState, useEffect } from 'react';
import { getImages } from '../../utils/getImages';
import { Background, Info, Poster, Container, ContainerButtons } from './styles';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { useNavigate } from 'react-router-dom';
import { getMovie, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState({});
  const [topMovies, setTopMovies] = useState([]); 
  const [topSeries, setTopSeries] = useState([]);
  const [topPeople, setTopPeople] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        setMovie(await getMovie());
        setTopMovies(await getTopMovies());
        setTopSeries(await getTopSeries());
        setPopularSeries(await getPopularSeries());
        setTopPeople(await getTopPeople());
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} />}
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
      {popularSeries && <Slider info={popularSeries} title={'Popular Series'} />}
      {topPeople && <Slider info={topPeople} title={'Top People'} />}
    </>
  );
}

export default Home;
