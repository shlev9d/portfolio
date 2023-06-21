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
						An active and purposeful person in life. I like to learn new things
						face challenges and look for ways to solve them. I studied Frontend
						3 years and now i have strong experience in front-end development. Wrote
						projects on JS, React, NextJS using Typescript,
						React+Redux/ReduxToolkit, ReactQuery, as well as various
						preprocessors and libraries for layout. Always open for
						communication and new technologies
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
