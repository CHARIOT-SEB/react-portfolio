import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Introduction />
					</Route>

					<Route exact path='/projects'>
						<Projects />
					</Route>
					
					<Route exact path='/work/'>
						<Work />
					</Route>

					<Route exact path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
