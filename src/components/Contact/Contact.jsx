import React, { useState } from 'react'
import './contact.css'
import { BiPhoneCall } from 'react-icons/bi'
import { getConfig } from '../../common'

const Contact = () => {
	const [formData, setDormData] = useState({
		email: '',
		name: '',
		text: '',
	})

	const sendMail = e => {
		e.preventDefault()
		if (window.Email) {
			window.Email.send(getConfig(formData)).then(message => {
				alert(`all ${message}! Thanks for the response`)
				setDormData({ email: '', name: '', text: '' })
			})
		}
	}

	const handleChange = e => {
		setDormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<section id='contact'>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<form onSubmit={sendMail}>
					<div className='form__input'>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Your Full Name'
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<textarea
						name='text'
						rows='7'
						placeholder='Your Message'
						value={formData.text}
						onChange={handleChange}
						required
					/>
					<button className='btn btn-primary form__button' type='submit'>
						Send Message
					</button>
				</form>

				<div className='contact__tel'>
					<article className='contact__option'>
						<a href='tel:+48577429854' target={'_blank'} rel='noreferrer'>
							<BiPhoneCall className='contact__icon' />
							<h4>+48577429854</h4>
							<h5>Poland,Warsaw</h5>
						</a>
					</article>
					<article className='contact__option'>
						<a href='tel:+375336393676' target={'_blank'} rel='noreferrer'>
							<BiPhoneCall className='contact__icon' />
							<h4>+375336393676</h4>
							<h5>Minsk,Belarus</h5>
						</a>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Contact
