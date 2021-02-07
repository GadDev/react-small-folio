import React, { Component } from 'react';
import styles from './Title.module.css';
const TITLES = [
	"I'm a frontend developer",
	"I'm a keen book reader",
	"I'm a learner",
	"I'm traveller",
];

class Title extends Component {
	state = {
		titleIndex: 0,
		fadeIn: true,
	};

	componentDidMount() {
		this.timeout = setTimeout(() => {
			this.setState({ fadeIn: false });
		}, 1500);
		this.animateTitles();
	}
	componentWillUnmount() {
		clearInterval(this.interval);
		clearTimeout(this.timeout);
	}
	animateTitles() {
		this.interval = setInterval(() => {
			const { titleIndex } = this.state;
			let newTitleIndex = (titleIndex + 1) % TITLES.length;
			this.setState({ titleIndex: newTitleIndex, fadeIn: true });
			setTimeout(() => {
				this.setState({ fadeIn: false });
			}, 1500);
		}, 3000);
	}
	render() {
		const { fadeIn, titleIndex } = this.state;
		const renderTitle = TITLES[titleIndex];
		return (
			<span className={fadeIn ? styles.titleFadeIn : styles.titleFadeOut}>
				{renderTitle}
			</span>
		);
	}
}

export default Title;
