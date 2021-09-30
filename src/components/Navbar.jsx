import React from 'react';

const Navbar = () => {
	return (
		<div>
			<header className='header' id='header'>
				<nav className='nav-bar' id='nav-bar'>
					<div className='final-logo'>
						<h1 className='sebastian'>Sebastian</h1>
						<h2 className='boyse'>Boyse</h2>
						<div className='yellow-logo-block'></div>
						<h3 className='logo-tagline'>RESPONSIVE WEB & SOFTWARE DEVELOPMENT</h3>
					</div>

					<div className='yellow-nav-block'></div>
					<ul className='nav-links'>
						<li>
							<a href='index.html' className='nav-link' id='nav-home'>
								Home
							</a>
						</li>
						<li>
							<a href='portfolio.html' className='nav-link' id='nav-portfolio'>
								Portfolio
							</a>
						</li>
						<li>
							<a href='work.html' className='nav-link' id='nav-work'>
								Work
							</a>
						</li>
						<li>
							<a href='contact.html' className='nav-link' id='nav-contact'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
