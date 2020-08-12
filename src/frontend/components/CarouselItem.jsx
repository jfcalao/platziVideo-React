import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/Components/CarouselItem.scss'
import playIcon from '../assets/statics/play-icon.png'
import plusIcon from '../assets/statics/plus-icon.png'
import deleteIcon from '../assets/statics/remove-icon.png'

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props
  const handleSetFavorite = () => {
    props.setFavorite(
      { id, cover, title, year, contentRating, duration }
    )
  }
  const handleDeleteFavorite = id => {
    props.deleteFavorite(id)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img"
        src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <div className="carousel-item__details--img">
            <Link to={`/player/${id}`}>
              <img src={playIcon} alt="estto" />
            </Link>

            {(isList) ?
              <img src={deleteIcon} alt="esto" onClick={() => { handleDeleteFavorite(id) }} />
              :
              <img src={plusIcon} alt="esto" onClick={handleSetFavorite} />
            }


          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--sugtitle"> {`${year} ${contentRating} ${duration}`}</p>

        </div>
      </div>
    </div>
  )
}
CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}
export default connect(null, mapDispatchToProps)(CarouselItem)