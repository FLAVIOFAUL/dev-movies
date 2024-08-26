import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import { Container } from "../Header/styles"; 
import { Background } from "./styles"; 
import { getMovieVideos as fetchMovies } from "../../services/getData";

function Modal({ movieId }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieData = await fetchMovies(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <Background>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="YouTube Video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

Modal.propTypes = {
  movieId: PropTypes.any.isRequired,
};

export default Modal;
