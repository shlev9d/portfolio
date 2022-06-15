import React from 'react'
import { BiMessageSquareCheck } from 'react-icons/bi'
import './skills.css'

const Skills = () => {
	return (
		<section id='experience'>
			<h2>My skills in Frontend Development</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<article className='experience__details'>
						<h4>HTML</h4>
					</article>
					<article className='experience__details'>
						<h4>CSS</h4>
					</article>
					<article className='experience__details'>
						<h4>Sass/Less</h4>
					</article>
					<article className='experience__details'>
						<h4>Tailwind</h4>
					</article>
					<article className='experience__details'>
						<h4>StyledComponents</h4>
					</article>
					<article className='experience__details'>
						<h4>JavaScript</h4>
					</article>
					<article className='experience__details'>
						<h4>React</h4>
					</article>
					<article className='experience__details'>
						<h4>TypeScript</h4>
					</article>
					<article className='experience__details'>
						<h4>Git/GitHub</h4>
					</article>
					<article className='experience__details'>
						<h4>Redux/ReduxToolKit</h4>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Skills
