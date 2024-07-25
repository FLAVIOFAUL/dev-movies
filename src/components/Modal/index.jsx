import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import { Container } from "../Header/styles"; 
import { Background } from "./styles"; 
import api from "../../services/api";

function Modal({ movieId }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await api.get(`/movie/${movieId}/videos`);
        setMovie(data.results[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movieId]);

  return (
    <Background>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video player"
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
