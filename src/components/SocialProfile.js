const SocialProfile = ({ ...props }) => {
	const { id, link, image } = props;
	console.log(image);
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			style={{ margin: '.2rem' }}
		>
			<div>
				<img src={image} alt={id} style={{ width: 35, height: 35 }} />
			</div>
		</a>
	);
};
export default SocialProfile;
