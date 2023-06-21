import React from 'react'
import CV from '../../assets/Aleksandr Shliaviada.pdf'
import './header.css'
import Socials from '../Socials/Socials'

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5 className='text-light'>Hello I'm</h5>
				<h1>Aleksandr Shliaviada</h1>
				<h5 className='text-light'>Front-end Developer</h5>
				<h4>Warsaw(Poland)/Minsk(Belarus)</h4>
				<Socials />{' '}
				<a href={CV} download className='btn btn-primary'>
					Download CV
				</a>
			</div>
		</header>
	)
}

export default Header
