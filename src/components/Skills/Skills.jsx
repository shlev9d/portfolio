import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './skills.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { allSkills } from '../../common'

const Skills = () => {
	const [displayWidth, setDisplayWidth] = useState(window.innerWidth)

	useEffect(() =>{
		window.addEventListener('resize', () => setDisplayWidth(window.innerWidth))
		return window.removeEventListener('resize', () =>
			setDisplayWidth(window.innerWidth)
		)
	},[])

	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: 0,
		slidesToShow: displayWidth > 1261 ? 3 : displayWidth > 876 ? 2 : 1,
		speed: 500,
	}
	return (
		<section id='experience'>
			<h2>My skills in Frontend Development</h2>
			<div className='container experience__container'>
				<Slider {...settings}>
					{allSkills.map(({ category, skills }) => (
						<article className='experience__details' key={category}>
							<h4>{category}</h4>
							<div className='experience__skills'>
								{skills.map(skill => (
									<p className='experience__skill' key={skill}>
										{skill}
									</p>
								))}
							</div>
						</article>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Skills
