import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/Components/CarouselItem.scss'
import playIcon from '../assets/statics/play-icon.png'
import plusIcon from '../assets/statics/plus-icon.png'

const CarouselItem = ( { cover, title, year, contentRating, duration } ) => (
  <div className="carousel-item">
    <img className="carousel-item__img"
      src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <div className="carousel-item__details--img">
          <img src={playIcon} alt="estto" />
          <img src={plusIcon} alt="esto" />

        </div>
<p className="carousel-item__details--title">{title}</p>
<p className="carousel-item__details--sugtitle"> {`${year} ${contentRating} ${duration}`}</p>

      </div>
    </div>
  </div>
)

CarouselItem.propTypes= {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default CarouselItem