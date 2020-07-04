import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import '../assets/styles/Components/Login.scss'
import '../assets/styles/Media.scss'
const Register = (props) => {
	document.body.classList.add("isGreen")
	const [form, setValues] = useState({
		name: '',
		email: '',
		password: ''

	})
	const handleInput = event => {
		setValues(
			{
				...form,
				[event.target.name]: event.target.value
			}
		)
	}
	const handleSubmit = event => {
		event.preventDefault()
		props.registerRequest(form)
		props.history.push('/')
	}
	return (
		<section className="login">
			<section className="login__container">
				<h2>Regístrate</h2>
				<form action="" className="login__container--form" onSubmit={handleSubmit}>
					<input
						name='name'
						className="inpu"
						type="text"
						placeholder="Nombre"
						onChange={handleInput}
					/>
					<input
						name='email'
						className="inpu"
						type="text"
						placeholder="Correo"
						onChange={handleInput}
					/>
					<input
						name='password'
						className="inpu"
						type="password"
						placeholder="Contraseña"
						onChange={handleInput}
					/>
					<button className="button">Registrame</button>
				</form>
				<Link className="login__container--a" to="/login">Iniciar sesión</Link>
			</section>
		</section>
	)
}

const mapDispatchToProps = {
	registerRequest
}


export default connect(null, mapDispatchToProps)(Register)