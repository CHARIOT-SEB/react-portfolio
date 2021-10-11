
import { NavLink } from 'react-router-dom';

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
							<NavLink to='/' className='nav-link' id='nav-home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName='nav-link-bold'
								to='/projects/'
								className='nav-link'
								id='nav-portfolio'
							>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName='nav-link-bold'
								to='/work/'
								className='nav-link'
								id='nav-work'
							>
								Work
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName='nav-link-bold'
								to='/contact/'
								className='nav-link'
								id='nav-contact'
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
