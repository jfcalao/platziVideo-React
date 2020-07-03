import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutRequest } from '../actions'
import classNames from 'classnames'
import gravatar from '../utils/gravatar'
import logo from '../assets/statics/logo-platzi-video-BW2.png'
import userIcon from '../assets/statics/user-icon.png'
import '../assets/styles/Components/Header.scss'
const Header = (props) => {
	const { user, isGreen } = props
	const hasUser = Object.keys(user).length > 0
	const handleLogout = () => {
		props.logoutRequest({})
	}
	const classHeader= classNames('header',{isGreen})
	return (
		<header className={classHeader}>
			<Link to="/">
				<img className="header__img" src={logo} alt="Logo-Platzi-Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{
						hasUser ?
							<img src={gravatar(user.email)} alt="user-icon" />
							:
							<img src={userIcon} alt="user-icon" />

					}
					<p>Perfil</p>
				</div>
				<ul>
					{
						hasUser ?
							<li><Link to="/login">{user.name || "Cuenta"}</Link></li>
							:
							null
					}
					{
						hasUser ?
							<li><a src="#login" onClick={handleLogout}>Cerrar Sesión</a></li>
							:
							<li><Link to="/login">Iniciar Sesión</Link></li>
					}
				</ul>
			</div>
		</header>
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	logoutRequest
}
Header.propTypes={
	user: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)