import { useState } from 'react';
import Projects from './components/Projects';
import ProfilePicture from './components/ProfilePicture';
import SocialProfiles from './components/SocialProfiles';
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
				about programming. Besides coding, I love MP, books and cooking.
			</p>
		</div>
	) : null;

	const toggleDisplayBio = () => {
		return setstate({ ...state, displayBio: !state.displayBio });
	};

	let btnLabel = state.displayBio ? 'Show less' : 'Read more';

	return (
		<div className={styles.App}>
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<ProfilePicture />
				<h1>Bonjour!</h1>
			</div>
			<p>My name is Alexandre, I'm Frontend engineer</p>
			<p>I'm always looking forward to working on meaningful projects</p>
			{bio}
			<button onClick={toggleDisplayBio}>{btnLabel}</button>
			<hr></hr>
			<Projects />
			<SocialProfiles />
		</div>
	);
};

export default App;
