import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage'
import './App.css';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/"
						component={FirstPage} />

					<Route exact path="/second"
						component={SecondPage} />
					<Route exact path="/third"
						component={ThirdPage} />
					<Route exact path="/fourth"
						component={FourthPage} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
