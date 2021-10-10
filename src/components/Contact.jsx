import { useState } from 'react';
import linkedin from '../images/icons/icons8-linkedin-50.png';
import facebook from '../images/icons/icons8-facebook-50-2.png';
import github from '../images/icons/icons8-github-50.png';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formInput, setFormInput] = useState({});
	const [submit, setSubmit] = useState('');

	const handleSubmit = (event) => {
		if (
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			) === false
		) {
			event.preventDefault();
			setSubmit('Not a valid email');
		} else {
			event.preventDefault();
			setSubmit('');
			console.log(formInput);
		}
	};

	return (
		<div>
			<div className='parent-container-socials'>
				<div className='socials-container'>
					<div className='socials-div'>
						<a href='https://www.linkedin.com/in/seb-boyse/' target='_blank' rel='noreferrer'>
							<img className='linkedin-icon' src={linkedin} alt='linkedin logo' />
						</a>
					</div>

					<div className='socials-div'>
						<a href='https://www.facebook.com/seb.boyse' target='_blank' rel='noreferrer'>
							<img className='facebook-icon' src={facebook} alt='facebook logo' />
						</a>
					</div>

					<div className='socials-div'>
						<a href='https://github.com/CHARIOT-SEB' target='_blank' rel='noreferrer'>
							<img className='github-icon' src={github} alt='github logo' />
						</a>
					</div>
				</div>

				<div className='contact-div'>
					<h2 className='project-title'>Get in Contact!</h2>
					<br />
					<form onSubmit={handleSubmit}>
						<label className='form-labels' htmlFor='input'>
							Name
						</label>
						<input
							type='text'
							id='input'
							value={name}
							onChange={(event) => {
								setName(event.target.value);
								setFormInput({ name: name, email: email, msg: message });
							}}
						/>
						<br />
						<br />
						<div>
							<label className='form-labels' htmlFor='input'>
								Email
							</label>
							<input
								type='text'
								id='input'
								value={email}
								onChange={(event) => {
									setEmail(event.target.value);
									setFormInput({ name: name, email: email, msg: message });
								}}
							/>
							<p className='email-err'>{submit}</p>
						</div>
						<br />
						<br />

						<label className='form-labels' htmlFor='input'>
							Message
						</label>
						<br />
						<textarea
							className='text-input'
							type='text'
							id='input'
							size='1'
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
								setFormInput({ name: name, email: email, msg: message });
							}}
							placeholder='  Feel free to request my CV...'
						/>
						<br />
						<br />

						<button type='submit' className='submitButton'>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
