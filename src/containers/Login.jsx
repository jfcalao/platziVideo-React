import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../actions'
import googleIcon from '../assets/statics/google-icon.png'
import twiterIcon from '../assets/statics/twitter-icon.png'
import '../assets/styles/Components/Login.scss'
import '../assets/styles/Media.scss'
const Login = (props) => {
	const [form, setValues] = useState({
		email: ''
	})
	const handleInput = (event) => {

		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		props.setUser(form)
		props.history.push('/')
	}
	document.body.classList.add("isGreen")
	return (

		<section className="login" >
			<section className="login__container" >
				<h2 tabIndex="0">Inicia sesión</h2>
				<form action="" className="login__container--form" onSubmit={handleSubmit}>
					<input
						name='email'
						aria-label="Correo"
						className="inpu"
						type="text"
						placeholder="Correo"
						onChange={handleInput}
					/>
					<input
						name='password'
						aria-label="Contraseña"
						className="inpu"
						type="password"
						placeholder="Contraseña"
						onChange={handleInput}
					/>
					<button className="button">Iniciar sesión</button>
					<div className="login__container--remember-me">
						<label>
							<input type="checkbox" /> Recuérdame
                    </label>
						<a href="">Olvidé mi contraseña</a>
					</div>
				</form>
				<section className="login__container--social">
					<div tabIndex="0">
						<img src={googleIcon} alt="inicio sesión Google" />
                    Inicia sesión con google
                </div>
					<div tabIndex="0">
						<img src={twiterIcon} alt="inicio sesión Twitter" />
                    Inicia sesión con twitter
                </div>
				</section>
				<p className="login__container--register">No tienes nunguna cuenta <Link to="/register">Registrate</Link></p>
			</section>
		</section>

	)
}
const mapDispatchToProps = {
	setUser,
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)