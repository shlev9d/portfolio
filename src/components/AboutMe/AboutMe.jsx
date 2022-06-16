/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import foto from '../../assets/foto2.png'
import './aboutMe.css'

const AboutMe = () => {
	return (
		<section id='about'>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-foto'>
						<img src={foto} alt='About Image' />
					</div>
				</div>
				<div className='about__content'>
					<p>
						I am 26 years old. I'm from Belarus, but now live in Warsaw. I have
						been studying Frontend Developent for 1.5 years.Have some experience
						in writing projects on React, React+Typescript,
						React+Redux/ReduxToolkit. Use various preprocessors and libraries
						for layout. I would like to get experience in team commercial
						development. In future i plan to learn Next.js, ReactNative.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
