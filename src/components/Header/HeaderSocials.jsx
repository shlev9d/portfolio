import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiTelegramLine } from 'react-icons/ri'

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://t.me/shlev9d' target={'_blank'} rel='noreferrer'>
				<RiTelegramLine />
			</a>
			<a
				href='https://www.instagram.com/shlev9d'
				target='_blank'
				rel='noreferrer'
			>
				<AiOutlineInstagram />
			</a>
			<a href='https://github.com/shlev9d' target='_blank' rel='noreferrer'>
				<FiGithub />
			</a>
			<a
				href='https://www.linkedin.com/in/shlev9d/'
				target={'_blank'}
				rel='noreferrer'
			>
				<AiOutlineLinkedin />
			</a>
		</div>
	)
}

export default HeaderSocials
