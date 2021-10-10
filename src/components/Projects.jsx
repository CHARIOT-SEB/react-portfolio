import React from 'react';
import Iframe from 'react-iframe';
import Anime from '../images/Anime.png';

const Projects = () => {
	return (
		<div>
			<div className='parent-container-top'>
				<div className='projects-div'>
					<h2 className='project-title'>Coroamer</h2>
					<p className='projects-text'>
						Coroamer is a mobile application on both iOS and Android to help people navigate travel
						in a mid-pandemic world. No more mixed signals, no more conflicting articles on tests
						and no more quarantine confusion. With this app, British holidaymakers can be sure of
						what they need and have to do in terms of tests and quarantines to get to that beach!{' '}
						<br />
						<br /> The app lets you choose a destination from one of 31 EU nations, and it will
						bring up all of the Covid-19 travel restrictions and requirements to do with that
						country all in one place. Breaking down information clearly based on vaccine status, and
						local guild-lines when you arrive in the country. It also displays a map of the country
						chosen, Apple Maps on iOS and Google Maps for Android. You can then add the country to
						your 'Trips' on your account, stating when dates you plan to travel between. After the
						date has passed the 'Trip' will be moved to a 'Past Trips' list on your account so the
						User can view their holidays!
					</p>
					<div className='coroamer-video'>
						<div className='video'>
							<Iframe
								src='https://drive.google.com/file/d/1VYmS6weSy8EWGH2XcKiBiCSBHNm398jm/preview'
								width='440'
								height='250'
								allow='fullscreen'
								frameBorder='0'
							></Iframe>
						</div>
						<div className='tech-stack-container'>
							<h3 className='titles'>Tech Stack</h3>
							<p className='tech-stack-text'>
								React Native | TypeScript | MongoDB | Express | Heroku | Jest | ExpoGO | Axios
							</p>
							<a
								className='pres-link'
								href='https://www.youtube.com/watch?v=tx-D_Sobr-A&t=3s'
								target='_blank'
								rel='noreferrer'
							>
								Northcoders - Presentation Video
							</a>
							<div className='tech-stack-container'>
								<h3 className='titles'>GitHub Repositories</h3>
							</div>
							<div className='repos-dev'>
								<a
									href='https://github.com/Edd-Cole/Covid-19-Travel-App'
									className='github-links'
									target='_blank'
									rel='noreferrer'
								>
									BACKEND
								</a>
								<a
									href='https://github.com/CHARIOT-SEB/Covid-Travel-App-Frontend'
									className='github-links'
									target='_blank'
									rel='noreferrer'
								>
									FRONTEND
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='parent-container'>
				<div className='projects-div'>
					<h2 className='project-title'>The Anime Aquirer</h2>
					<p className='projects-text'>
						The Anime Aquirer is a pair programmed project that was created in 2 afternoons. A short
						frontend project that uses Disney's free API for for any existing Ghilibi movie based on
						Title, Director or Producer. Which then links to a google search about the movie for
						more information. this was a fun project to work on and could be scaled over time to
						have many more features, such as to show where to stream each movie or search by year,
						for example.
					</p>
					<img className='anime-img' src={Anime} alt='anime website screenshot example' />
					<div className='coroamer-video'>
						<a
							className='github-links'
							href='http://anime-acquirer.netlify.app'
							target='_blank'
							rel='noreferrer'
						>
							View Site
						</a>
						<a
							href='https://github.com/CHARIOT-SEB/anime-acquirer'
							className='github-links'
							target='_blank'
							rel='noreferrer'
						>
							GITHUB
						</a>
					</div>
					<div className='tech-stack-container'>
						<h3 className='titles'>Tech Stack</h3>
						<p className='tech-stack-text'>ReactJS | NodeJS | ExpressJS | Axios</p>
					</div>
				</div>
			</div>
			<div className='parent-container'>
				<div className='projects-div'>
					<h2 className='project-title'>NorthCoders News</h2>
					<p className='projects-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni nemo impedit
						ipsam architecto nobis voluptates distinctio placeat aperiam dicta quas repellat sequi,
						quibusdam explicabo consectetur maxime blanditiis quos earum.
					</p>
					<div className='tech-stack-container'>
						<h3 className='titles'>Tech Stack</h3>
						<p className='tech-stack-text'>
							React Native | MongoDB | Express | Heroku | Jest | ExpoGO | Axios
						</p>
						<div className='repos-dev'>
							<a
								href='https://github.com/CHARIOT-SEB/nc-news'
								className='github-links'
								target='_blank'
								rel='noreferrer'
							>
								GITHUB
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='parent-container'>
				<div className='projects-div'>
					<h2 className='project-title'>Ridiculous Recipes</h2>
					<p className='projects-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni nemo impedit
						ipsam architecto nobis voluptates distinctio placeat aperiam dicta quas repellat sequi,
						quibusdam explicabo consectetur maxime blanditiis quos earum.
					</p>
					<div className='tech-stack-container'>
						<h3 className='titles'>Tech Stack</h3>
						<p className='tech-stack-text'>
							React Native | MongoDB | Express | Heroku | Jest | ExpoGO | Axios
						</p>
						<div className='repos-dev'>
							<a
								href='https://github.com/CHARIOT-SEB/ridiculous-recipes'
								className='github-links'
								target='_blank'
								rel='noreferrer'
							>
								GITHUB
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
