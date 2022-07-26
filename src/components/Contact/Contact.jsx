import React, { useState } from 'react'
import './contact.css'
import { BiPhoneCall } from 'react-icons/bi'
import { send } from 'emailjs-com'

const Contact = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [text, setText] = useState('')
const sendMail = e => {
	e.preventDefault()
	send(
		'service_hy5jjzb',
		'template_3tk73ms',
		{ name, email, text },
		'5tJGQcmXy66v4adxe'
	)
		.then(res => console.log('successfully', res.status, res.text))
		.catch(err => console.log('error', err))
		setName('')
		setEmail('')
		setText('')
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
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Your Full Name'
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>

				<textarea
					name='message'
					rows='7'
					placeholder='Your Message'
					value={text}
					onChange={e => setText(e.target.value)}
					required
				/>
				<button className='btn btn-primary form__button' type='submit'>
					Send Message for my Email
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
