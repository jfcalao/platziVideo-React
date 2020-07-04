import React from 'react'
import { connect } from 'react-redux'
import { setSearchResults } from '../actions'
import '../assets/styles/Components/Search.scss'
const Search = (props) => {
	const handleInput= event=>{
		props.setSearchResults(event.target.value)
	}
	return (
		<section className="main">
			<div className="main__container">
				<h2 className="main__title">¿Qué quieres ver hoy?</h2>
				<input className="input" 
				type="text" 
				placeholder="Buscar..." 
				onChange={handleInput}
				/>

			</div>

		</section>
	)
}
const mapDispatchToProps={
	setSearchResults
}
export default connect(null, mapDispatchToProps)(Search)