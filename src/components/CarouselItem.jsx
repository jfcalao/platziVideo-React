import React from 'react'
import '../assets/styles/Components/CarouselItem.scss'
import playIcon from '../assets/statics/play-icon.png'
import plusIcon from '../assets/statics/plus-icon.png'

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img"
      src="https://cdn.pixabay.com/photo/2017/03/27/12/18/fields-2178329_960_720.jpg" alt="" />
    <div className="carousel-item__details">
      <div>
        <div className="carousel-item__details--img">
          <img src={playIcon} alt="estto" />
          <img src={plusIcon} alt="esto" />

        </div>
        <p className="carousel-item__details--title">Titulo Descriptivo</p>
        <p className="carousel-item__details--sugtitle">2019 16+ 114 minutos</p>

      </div>
    </div>
  </div>
)
export default CarouselItem