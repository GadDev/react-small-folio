import React from 'react';

const Artist = ({ artist }) => {
	if (!artist) return null;
	const { images, name, followers, genres } = artist;
	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				margin:'2rem auto'
			}}
		>
			<h3>{name}</h3>
			<p>{followers.total} followers</p>
			<p>{genres.join(',')}</p>
			<img
				style={{
					width: 200,
					height: 200,
					borderRadius: 100,
					objectFit: 'cover',
				}}
				src={images[0] && artist.images[0].url}
				alt='artist-profile'
			/>
		</section>
	);
};

export default Artist;
