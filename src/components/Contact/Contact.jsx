import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
	return (
		<section id='contact'>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				{/* <div className='contact__options'> */}
				<article className='contact__option'>
					<FiMail className='contact__icon' />
					<h4>Email</h4>
					<h5>shlev9d@gmail.com</h5>
					<a href='/' target={'_blank'}>
						Send a message
					</a>
				</article>
				{/* </div> */}

				<form action=''>
					<div className='form__input'>
						<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					</div>
					
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button className='btn btn-primary' type='submit'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
