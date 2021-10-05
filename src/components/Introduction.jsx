import html from '../images/Logos/5847f5bdcef1014c0b5e489c.png';
import css from '../images/Logos/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png';
import js from '../images/Logos/JavaScript-Logo.png';
import nodejs from '../images/Logos/5848191dcef1014c0b5e49b4.png';
import react from '../images/react-cutout.png';
import express from '../images/Logos/beginners-guide-to-using-express-js-and-node-js-framework-removebg-preview.png';
import sql from '../images/Logos/kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ee92a46.0488681015273524309551.png';
import mongo from '../images/Logos/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png';
import postgres from '../images/Logos/postgres.png';
import github from '../images/Logos/GitHub_Logo.png';
import { ReactComponent as Developer } from '../images/software-developer.svg';
import { ReactComponent as Snowboarder } from '../images/snowboarding.svg';

const Introduction = () => {
	return (
		<div>
			<section>
				<div className='intro-quote-div'>
					<h4 className='text-idea'>
						"I love creative problem solving, <br />
						building ambitious software, apps and websites"
						<br />
						<br />
					</h4>
				</div>
				<div className='parent-div-left'>
					<div>
						<p className='about-me'>{'< A little about me />'}</p>
					</div>
					<div className='div-left'>
						<p className='hi'>hi!</p>
						<p className='intro-text'>
							I'm Sebastian, most people call me <mark>Seb</mark>. I'm a 28 year-old
							<mark> Junior Software Developer</mark> based in <mark> Manchester</mark>, UK.
							<br />I love creating innovative applications and interactive websites that
							<mark> fulfils the clients needs</mark> whilst keeping
							<mark> the user engaged. </mark>
							<br />
							<br />
							From being completely self-taught to going on to graduate from the
							<mark> Northcoders coding Bootcamp</mark> where I have gained the techniques and
							skills that have given me an extremely solid foundation for a career in software
							development. I have since built multiple web applications in React in a short amount
							of time and then moved onto mobile applications with <mark>React Native.</mark> Including this site your viewing now, which I built in <mark>ReactJS!</mark>
						</p>
					</div>
					<div>
						<Developer className='developer-svg' />
					</div>
				</div>
				<div className='parent-div-right'>
					<div>
						<p className='skills'>{'< The technical stuff />'}</p>
					</div>
					<div className='div-right'>
						<p className='hi2'>a little more about me</p>
						<p className='intro-text2'>
							I've always been interested in computers, tech and the internet, but when I left school in
							2011, I ended up doing an Upholstery apprenticeship and worked as a bespoke upholsterer in Nottingham for 9 years!
							(I even once made a sofa for a very famous british comedian!)
							<br />
							<br />
							But since graduating as a <mark>Northcoder</mark> I've learnt and used a range of different frontend and backend technologies. 
							As well as important working practicess such as Test Driven Development, Agile working, 
						</p>
					</div>
					<div className='logos-container'>
						<img className='html-logo' src={html} alt='html logo' />
						<img className='css-logo' src={css} alt='css logo' />
						<img className='js-logo' src={js} alt='javascript logo' />
						<img className='node-js' src={nodejs} alt='HTML Logo' />
						<img className='react' src={react} alt='react logo' />
						<img className='sql-logo' src={sql} alt='sql-logo' />
						<img className='mongo' src={mongo} alt='mongodb-logo' />
						<img className='postgres' src={postgres} alt='postgres-logo' />
						<img className='github' src={github} alt='github-logo' />
						<img className='express-js' src={express} alt='express-js logo' />
					</div>
				</div>
				<div className='parent-div-left-2'>
					<div>
						<p className='what-i-love'>{'< what i love />'}</p>
					</div>
					<div className='div-left-2'>
						<p className='hi-2'>hobbies!</p>
						<p className='intro-text-2'>
							Outside of the world of programming and coding, I love to play music, I've playing the
							drums for nearly 20 years and playing guitar for 10 now! I'm also a huge extreme
							sports fan, I love skateboarding, snowboarding and skiing. Anything that gets keeps me
							active and gets adrenaline going!
							<br />
							<br />
							As a stranger once said to me in a skatepark
							<br />{' '}
							<mark>
								'you don't stop skating because you get old, you get old because you stop skating!'
							</mark>
							<br /> Ever since, I've always remembered this and I try to apply to everything in
							life, especially learning new skills
							<br />
							<br />
							Anyway... I hope you enjoy my portfolio site, please checkout my projects page!
						</p>
					</div>
					<Snowboarder className='snowboarder-svg' />
				</div>
			</section>
				<div className='credits'>
					Developer icon made by{' '}
					<a href='https://www.flaticon.com/authors/monkik' title='monkik'>
						monkik
					</a>{' '}
					from{' '}
					<a href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
					Snowboarder icon made by{' '}
					<a href='https://www.flaticon.com/authors/ultimatearm' title='ultimatearm'>
						ultimatearm
					</a>{' '}
					from{' '}
					<a href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
				</div>
		</div>
	);
};

export default Introduction;
