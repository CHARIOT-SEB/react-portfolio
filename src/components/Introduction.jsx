import html from '../images/Logos/5847f5bdcef1014c0b5e489c.png';
import css from '../images/Logos/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png';
import js from '../images/Logos/JavaScript-Logo.png';
import nodejs from '../images/Logos/5848191dcef1014c0b5e49b4.png';
import react from '../images/react-cutout.png';
import express from '../images/Logos/beginners-guide-to-using-express-js-and-node-js-framework-removebg-preview.png';
import sql from '../images/Logos/kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ee92a46.0488681015273524309551.png';


const Introduction = () => {
	return (
		<div>
			<section>
				<div className='intro-quote-div'>
					<h4 className='text-idea'>
						I love creative problem solving, <br />
						building ambitious apps and websites, <br />
						<br />
						...oh and skateboarding 🛹
					</h4>
				</div>
				<div className='parent-div-left'>
					<div>
						<p className='about-me'>...A little about me</p>
					</div>
					<div className='div-left'>
						<p className='hi'>hi.</p>
						<p className='intro-text'>
							I'm <mark>Sebastian</mark>, you can call me <mark>Seb</mark>. I'm a 28 year-old
							<mark>Software and Web Developer</mark> based in <mark>Manchester</mark>, UK.
							<br />
							<br />I love creating innovative applications and interactive websites that{' '}
							<mark>fulfils the clients needs</mark> whilst keeping
							<mark> the consumer engaged.</mark>
							<br />
							<br />
							From being completely self-taught to going on to graduate from{' '}
							<mark>Northcoders Bootcamp</mark>, I'm excited to kickstart my developer career!
						</p>
					</div>
				</div>
				<div className='parent-div-right'>
					<div>
						<p className='skills'>The technical stuff...</p>
					</div>
					<div className='div-right'>
						<p className='hi2'>hi again.</p>
						<p className='intro-text2'>
							I have always interested in computers, tech and the internet. When I left school in
							2011, I bought a MacBook Pro so that I could learn how to code.
							<br />
							<br />
							My first programming language was JavaScript and from there, everything just took off.
							After being completely self-taught for nearly two years, I decided to go on to study
							at Northcoders Bootcamp in Manchester. It was here where my career really took off as
							it gave me the foundations that would allow me to kickstart my developer career.
						</p>
					</div>
					<div className='logos-container'>
						<img
							className='html-logo'
							src={html}
							alt='html logo'
						/>
						<img
							className='css-logo'
							src={css}
							alt='css logo'
						/>
						<img className='js-logo' src={js} alt='javascript logo' />
						<img className='node-js' src={nodejs} alt='HTML Logo' />
						<img className='react' src={react} alt='react logo' />
						<img
							className='express-js'
							src={express}
							alt='express-js logo'
						/>
						<img
							className='sql-logo'
							src={sql}
							alt='sql-logo'
						/>
					</div>
				</div>
				<div className='parent-div-left-2'>
					<div>
						<p className='what-i-love'>...What I love!</p>
					</div>
					<div className='div-left-2'>
						<p className='hi-2'>hobbies!</p>
						<p className='intro-text-2'>
							Outside of the world of programming and coding, I love to play music, I've playing the
							drums for nearly 20 years and playing guitar for 10 now!
							<br />
							<br />
							I'm also a huge extreme sports fan, I love skateboarding, snowboarding and skiing.
							Anything that gets keeps me active and gets adrenaline going!
							<br />
							<br />
							As a stranger once said to me in a skatepark once 'you don't stop skating because you
							get old, you get old because you stop skating!'
						</p>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className='bum-video'>
					<video
						src='https://www.youtube.com/watch?v=jYxwGiGnOwU'
						width='320'
						height='240'
						controls
						id='video'
					>
						Video Not Supported
					</video>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</section>
		</div>
	);
};

export default Introduction;
