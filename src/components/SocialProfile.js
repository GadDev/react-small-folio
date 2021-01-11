const SocialProfile = ({ ...props }) => {
	const { id, link, image } = props;
	console.log(image);
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			style={{ margin: '.5rem' }}
		>
			<div>
				<img src={image} alt={id} style={{ width: 20, height: 20 }} />
			</div>
		</a>
	);
};
export default SocialProfile;
