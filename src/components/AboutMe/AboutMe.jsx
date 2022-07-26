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
						I am 26 years old. I'm from Belarus. Now live in Warsaw and in Minsk.
						I have been studying Frontend Development for 1.5 years. Have
						experience in writing projects in JS, React, React + Typescript,
						React+Redux/ReduxToolkit. Use various preprocessors and libraries
						for layout. I would like to get experience in team commercial
						development and improve my skills.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
