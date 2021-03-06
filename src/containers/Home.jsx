import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'
const Home = ({ searchResults, myList, original, trends }) => {
  document.body.classList.remove('isGreen')
  return (
    <>
      <Search />
      {
        searchResults.length > 0 &&
        <Categories title="Resultados de Busqueda...">
          <Carousel>
            {
              searchResults.map(item => <CarouselItem key={item.id} {...item}/>)

            }
          </Carousel>

        </Categories>
      }
      {myList.length > 0 &&

        <Categories title="Mi lista">
          <Carousel>
            {
              myList.map(item => <CarouselItem key={item.id} {...item} isList />)
            }
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {
            original.map(
              (item) => (<CarouselItem key={item.id} {...item} />)
            )
          }
        </Carousel>
      </Categories>
    </>
  )
}
Home.propTypes = {
  myList: PropTypes.array,
  trends: PropTypes.array,
  original: PropTypes.array
}
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    original: state.originals,
    searchResults: state.search
  }
}
export default connect(mapStateToProps, null)(Home)