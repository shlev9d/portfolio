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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque amet praesentium ullam pariatur laudantium sequi architecto asperiores ipsum, inventore quae perferendis doloribus ad assumenda? Ex deserunt aliquid facere numquam?</p>
        </div>
			</div>
		</section>
	)
}

export default AboutMe
