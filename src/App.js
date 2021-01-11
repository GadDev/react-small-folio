import { useState } from 'react';
import Projects from './components/Projects';
import ProfilePicture from './components/ProfilePicture';
import SocialProfiles from './components/SocialProfiles';
import Footer from './components/Footer';
import styles from './App.module.css';
const App = () => {
	const initialState = {
		displayBio: false,
	};

	const [state, setstate] = useState(initialState);
	let bio = state.displayBio ? (
		<div>
			<p>
				I live in London, and code every day. Love learn new things
				about programming. Besides coding, I love MP, books, running and
				cooking.
			</p>
		</div>
	) : null;

	const toggleDisplayBio = () => {
		return setstate({ ...state, displayBio: !state.displayBio });
	};

	let btnLabel = state.displayBio ? 'Show less' : 'Read more';

	return (
		<div className={styles.App}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<ProfilePicture />
				<h1>Bonjour!</h1>
			</div>
			<p>
				My name is Alexandre, I'm Frontend engineer. I'm always looking
				forward to working on meaningful projects.
			</p>

			{bio}
			<button onClick={toggleDisplayBio}>{btnLabel}</button>

			<Projects />
			<Footer>
				<SocialProfiles />
			</Footer>
		</div>
	);
};

export default App;
