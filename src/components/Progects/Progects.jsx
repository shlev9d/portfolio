import React from 'react'
import { allProgects } from '../../common'
import './progects.css'
import { FiGithub } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'

const Progects = () => {
	return (
		<section id='progects'>
			<h2>Some of my work</h2>
			<div className='container progects__container'>
				{allProgects.map(
					({ name, image, description, linkDemo, linkGitHub }) => (
						<div className='progects__block'>
							<img src={image} alt={name} className='progects__image' />
							<div className='progects__layer'>
								<h2>{name}</h2>
								<p>{description}</p>
								<div className='progects__socials'>
									<a href={linkGitHub} target='_blank' rel='noreferrer'>
										<h6>GitHub</h6>
										<FiGithub />
									</a>
									<a href={linkDemo} target='_blank' rel='noreferrer'>
										<h6>Demo</h6>
										<BiWorld />
									</a>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	)
}

export default Progects
