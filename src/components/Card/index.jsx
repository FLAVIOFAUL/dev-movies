import React from 'react';
import PropTypes from 'prop-types'; 

import { getImages } from '../../utils/getImages';
import { Container } from './styles' 

function Card({ item }) {
    return (
        <Container>
            <img src={getImages(item.poster_path)} alt={item.original_title} />
            <h3>{item.original_title}</h3>
        </Container>
    );
}


Card.propTypes = {
    item: PropTypes.shape({
        poster_path: PropTypes.string,
        original_title: PropTypes.string,
       
    }).isRequired,
};

export default Card