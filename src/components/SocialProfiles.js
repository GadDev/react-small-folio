import SOCIAL_PROFILES from '../data/socialProfile';
import SocialProfile from './SocialProfile';
const SocialProfiles = () => {
	return (
		<div
			style={{
				maxWidth: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{SOCIAL_PROFILES.map((profile) => (
					<SocialProfile key={profile.id} {...profile} />
				))}
			</div>
		</div>
	);
};

export default SocialProfiles;
