import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from './styles'

import Card from '../Card'
import { getImages } from '../../utils/getImages'
function Slider({ info, title }) {
  console.log(info, title);

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className='swiper'
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item}/>
        
        
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

Slider.propTypes = {
  info: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Slider