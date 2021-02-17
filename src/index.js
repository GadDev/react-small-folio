import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master'
import App from './App';
ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			<Route
				exact
				path='/'
				render={() => (
					<Header>
						<App />
					</Header>
				)}
			/>
			<Route
				path='/jokes'
				render={() => (
					<Header>
						<Jokes />
					</Header>
				)}
			/>
			<Route
				path='/music-master'
				render={() => (
					<Header>
						<MusicMaster />
					</Header>
				)}
			/>
		</Switch>
	</Router>,
	document.getElementById('root')
);
