const Project = ({ ...props }) => {
	const { title, description, link, image } = props;
	return (
		<article style={{ maxWidth: '300px', padding: '.5rem' }}>
			<h2>{title}</h2>
			<img
				src={image}
				alt={title}
				style={{ width: '100%', height: 'auto' }}
			/>
			<div>
				<p>{description}</p>
				<a href={link}>Link</a>
			</div>
		</article>
	);
};

export default Project;
