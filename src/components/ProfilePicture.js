import profilePic from '../assets/profile.jpeg';
import styles from './ProfilePicture.module.css';
const ProfilePicture = () => {
	return (
		<div className={styles.ProfilePicture}>
			<img src={profilePic} alt='' />
		</div>
	);
};

export default ProfilePicture;
