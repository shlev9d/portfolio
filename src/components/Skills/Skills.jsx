import React from 'react'
import { BiMessageSquareCheck } from 'react-icons/bi'
import './skills.css'


const Skills = () => {
  return (
		<section id='experience'>
			<div className='container experience__container'>
				<h2>My skills in Frontend Development</h2>
				<div className='experience__frontend'>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>HTML</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>JavaScript</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>CSS</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>React</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>Bootstrap</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
					<article className='experience__details'>
						<BiMessageSquareCheck className='experience__icon' />
						<div>
							<h4>Tailwind</h4>
							<small className='text-light'>Experienced</small>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Skills
