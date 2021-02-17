import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import '../style.css';

const API_URL = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
	state = { artist: null, tracks: [] };

	componentDidMount() {
		this.searchArtist('drake');
	}

	searchArtist = (artistQuery) => {
		fetch(`${API_URL}/artist/${artistQuery}`)
			.then((response) => response.json())
			.then((json) => {
				if (json.artists.total > 0) {
					const artist = json.artists.items[0];
					this.setState({ artist });

					fetch(`${API_URL}/artist/${artist.id}/top-tracks`)
						.then((response) => response.json())
						.then((json) => this.setState({ tracks: json.tracks }))
						.catch((error) => console.log(error.message));
				}
			})
			.catch((error) => console.log(error.message));
	};

	render() {
		return (
			<div className='App'>
				<h2>Music Master</h2>
				<Search searchArtist={this.searchArtist} />
				<Artist artist={this.state.artist} />
				<Tracks tracks={this.state.tracks} />
			</div>
		);
	}
}

export default App;
