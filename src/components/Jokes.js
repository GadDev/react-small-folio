import React, { Component } from 'react';
import styles from '../App.module.css';
const Joke = (props) => {
	const { id, setup, punchline } = props.joke;
	return (
		<p key={id}>
			{setup} <em>{punchline}</em>
		</p>
	);
};

class Jokes extends Component {
	state = { joke: {}, jokes: [] };

	componentDidMount() {
		console.log('Jokes mounted');
		fetch('https://official-joke-api.appspot.com/random_joke')
			.then((response) => response.json())
			.then((json) => this.setState({ joke: json }))
			.catch((error) => console.log(error.message));
	}

	fetchJokes = () => {
		fetch('https://official-joke-api.appspot.com/random_ten')
			.then((response) => response.json())
			.then((json) => this.setState({ jokes: json }))
			.catch((error) => console.log(error.message));
	};

	render() {
		const renderJokes = this.state.jokes.map((joke) => {
			return <Joke key={joke.id} joke={joke} />;
		});
		return (
			<div className={styles.App}>
				<h2>Highlighted joke</h2>
				<Joke joke={this.state.joke} />
				<h2>want ten more jokes?</h2>
				<button onClick={this.fetchJokes}>Click me!</button>
				{renderJokes}
			</div>
		);
	}
}

export default Jokes;
